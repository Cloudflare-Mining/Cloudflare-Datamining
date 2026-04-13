/**
 * Local HTTP server for OAuth callback
 */
import { createServer, type IncomingMessage, type Server, type ServerResponse } from 'node:http';
import { createConnection } from 'node:net';
import { CALLBACK_CONFIG, DENIED_URL, SUCCESS_URL } from './config.js';

/**
 * Check if a port is available
 */
function isPortAvailable(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const socket = createConnection({ port, host: CALLBACK_CONFIG.bindHost });
    socket.once('connect', () => {
      socket.destroy();
      resolve(false); // Port is in use
    });
    socket.once('error', () => {
      resolve(true); // Port is available
    });
  });
}

/**
 * Find an available port starting from startPort
 */
export async function findAvailablePort(): Promise<number> {
  for (let i = 0; i < CALLBACK_CONFIG.maxPortAttempts; i++) {
    const port = CALLBACK_CONFIG.startPort + i;
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(
    `No available ports found (tried ${CALLBACK_CONFIG.startPort}-${CALLBACK_CONFIG.startPort + CALLBACK_CONFIG.maxPortAttempts - 1}). ` +
      'Please close any applications using these ports.',
  );
}

/**
 * OAuth callback result
 */
export interface CallbackResult {
  code: string;
  state: string;
}

/**
 * Start a local HTTP server to receive the OAuth callback
 *
 * @param expectedState - The state parameter to validate
 * @param port - The port to listen on
 * @param timeoutMs - Timeout in milliseconds
 * @returns Promise resolving to the authorization code
 */
export function startCallbackServer(expectedState: string, port: number, timeoutMs: number): Promise<CallbackResult> {
  return new Promise((resolve, reject) => {
    let server: Server | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const cleanup = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      if (server) {
        server.close();
        server = null;
      }
    };

    // Set timeout
    timeoutId = setTimeout(() => {
      cleanup();
      reject(new Error(`Login timed out after ${timeoutMs / 1000} seconds. Please try again.`));
    }, timeoutMs);

    server = createServer((req: IncomingMessage, res: ServerResponse) => {
      const url = new URL(req.url || '', `http://${CALLBACK_CONFIG.bindHost}:${port}`);

      // Only handle the callback path
      if (url.pathname !== CALLBACK_CONFIG.path) {
        res.writeHead(404);
        res.end('Not Found');
        return;
      }

      const code = url.searchParams.get('code');
      const state = url.searchParams.get('state');
      const error = url.searchParams.get('error');
      const error_description = url.searchParams.get('error_description');

      // Handle OAuth errors
      if (error) {
        cleanup();
        res.writeHead(307, { Location: DENIED_URL });
        res.end();
        reject(new Error(`OAuth error: ${error_description || error}`));
        return;
      }

      // Validate state parameter
      if (state !== expectedState) {
        cleanup();
        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.end(`
          <html>
            <body>
              <h1>Authentication Failed</h1>
              <p>Invalid state parameter. This could indicate a CSRF attack.</p>
              <p>You can close this window.</p>
            </body>
          </html>
        `);
        reject(new Error('Invalid state parameter - possible CSRF attack'));
        return;
      }

      // Validate code
      if (!code) {
        cleanup();
        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.end(`
          <html>
            <body>
              <h1>Authentication Failed</h1>
              <p>No authorization code received.</p>
              <p>You can close this window.</p>
            </body>
          </html>
        `);
        reject(new Error('No authorization code received'));
        return;
      }

      // Success - redirect to success page
      cleanup();
      res.writeHead(307, { Location: SUCCESS_URL });
      res.end();

      resolve({ code, state });
    });

    server.on('error', (err) => {
      cleanup();
      reject(err);
    });

    // Bind to loopback only — keeps the OAuth callback server off the network.
    // CALLBACK_CONFIG.bindHost is '127.0.0.1', consistent with isPortAvailable().
    server.listen(port, CALLBACK_CONFIG.bindHost, () => {
      // Server is ready
    });
  });
}
