/**
 * vuln-scanner resource
 * @generated from apis/vuln-scanner/schema.ts
 *
 * Vulnerability scanning for web applications — manage scans, credential sets, and scan reports
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Vulnerability scanning for web applications — manage scans, credential sets, and scan reports
 */
export class VulnScanner extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }
}
