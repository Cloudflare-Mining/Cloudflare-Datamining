/**
 * First-run completion prompt
 *
 * Offers to install shell completions on first CLI use
 */
import * as readline from 'node:readline';
import { loadConfig, updateConfig } from './config.js';

type Shell = 'bash' | 'zsh' | 'fish';

/**
 * Escape a path for safe use in shell double quotes
 * Handles: $, `, \, ", and !
 */
function escapeShellPath(path: string): string {
  return path
    .replace(/\\/g, '\\\\') // Backslashes first
    .replace(/\$/g, '\\$') // Dollar signs
    .replace(/`/g, '\\`') // Backticks
    .replace(/"/g, '\\"') // Double quotes
    .replace(/!/g, '\\!'); // History expansion (bash)
}

/**
 * Detect user's shell from environment
 */
function detectShell(): Shell {
  const shell = process.env.SHELL || '';

  if (shell.includes('zsh')) {
    return 'zsh';
  }
  if (shell.includes('fish')) {
    return 'fish';
  }
  if (shell.includes('bash')) {
    return 'bash';
  }

  return 'bash';
}

/**
 * Check if we should show the prompt
 */
export function shouldShowPrompt(argv: string[]): boolean {
  // Not a TTY (piped, scripted, CI)
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    return false;
  }

  // CF_NO_PROMPT environment variable
  if (process.env.CF_NO_PROMPT === '1') {
    return false;
  }

  // Check for flags that indicate non-interactive use
  if (argv.includes('--quiet') || argv.includes('-q')) {
    return false;
  }

  // Running completions command itself
  if (argv.includes('completions') || argv.includes('__complete')) {
    return false;
  }

  // Check config
  const config = loadConfig();

  // Already prompted and user declined with "don't ask again"
  if (config.completions?.prompted && !config.completions?.installed) {
    return false;
  }

  // Already installed
  if (config.completions?.installed) {
    return false;
  }

  return true;
}

/**
 * Prompt user for input
 */
async function prompt(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim().toLowerCase());
    });
  });
}

/**
 * Run the completion installation
 */
async function installCompletions(shell: Shell): Promise<void> {
  // Import dynamically to avoid circular dependencies
  const { existsSync, mkdirSync, writeFileSync, readFileSync } = await import('node:fs');
  const { homedir } = await import('node:os');
  const { dirname, join } = await import('node:path');
  const { ensureCompletionsDir, getCompletionsDir } = await import('./config.js');
  const { BASH_COMPLETION_SCRIPT } = await import('./completions/bash.js');
  const { FISH_COMPLETION_SCRIPT } = await import('./completions/fish.js');
  const { ZSH_COMPLETION_SCRIPT } = await import('./completions/zsh.js');

  ensureCompletionsDir();
  const completionsDir = getCompletionsDir();
  const home = homedir();

  // Write completion script
  const filename = shell === 'zsh' ? '_cf.zsh' : shell === 'fish' ? 'cf.fish' : 'cf.bash';
  const completionPath = join(completionsDir, filename);
  const script =
    shell === 'zsh' ? ZSH_COMPLETION_SCRIPT : shell === 'fish' ? FISH_COMPLETION_SCRIPT : BASH_COMPLETION_SCRIPT;

  writeFileSync(completionPath, script, { mode: 0o644 });
  console.log(`  Created: ${completionPath}`);

  // Get shell config path
  let configPath: string;
  if (shell === 'fish') {
    configPath = join(home, '.config', 'fish', 'conf.d', 'cf.fish');
  } else if (shell === 'zsh') {
    configPath = join(home, '.zshrc');
  } else {
    configPath = join(home, '.bashrc');
  }

  // Ensure parent directory exists (e.g., ~/.config/fish/conf.d/)
  const configDir = dirname(configPath);
  if (!existsSync(configDir)) {
    mkdirSync(configDir, { recursive: true, mode: 0o755 });
  }

  // Read existing config and remove stale CF CLI completion entries
  let configContent = '';
  if (existsSync(configPath)) {
    configContent = readFileSync(configPath, 'utf-8');
    // Remove old CF CLI completions section if present (bash/zsh style)
    configContent = configContent.replace(/\n?# CF CLI completions\n\[\[.*_cf.*\]\].*source.*\n?/g, '');
    // Remove old CF CLI completions section (fish style)
    configContent = configContent.replace(/\n?# CF CLI completions\nif test -f .*\n\s+source .*\nend\n?/g, '');
  }

  // Add source line
  const safePath = escapeShellPath(completionPath);
  let sourceLine: string;
  if (shell === 'fish') {
    sourceLine = `\n# CF CLI completions\nif test -f "${safePath}"\n    source "${safePath}"\nend\n`;
  } else {
    sourceLine = `\n# CF CLI completions\n[[ -f "${safePath}" ]] && source "${safePath}"\n`;
  }
  configContent = configContent.trimEnd() + sourceLine;
  writeFileSync(configPath, configContent, { mode: 0o644 });
  console.log(`  Updated: ${configPath}`);

  // Update config
  updateConfig({
    completions: {
      prompted: true,
      installed: true,
      shell,
      path: completionPath,
    },
  });
}

/**
 * Show the first-run completion prompt
 */
export async function maybePromptForCompletions(argv: string[]): Promise<void> {
  if (!shouldShowPrompt(argv)) {
    return;
  }

  const shell = detectShell();

  console.log('');
  console.log('  Shell completions available for cf CLI.');
  console.log('');
  console.log('  Enable tab completion?');
  console.log(`    [Y] Yes, install for ${shell}`);
  console.log('    [n] No');
  console.log("    [N] No, don't ask again");
  console.log('');

  const answer = await prompt('  > ');

  if (answer === 'y' || answer === 'yes' || answer === '') {
    console.log('');
    console.log('Installing completions...');
    await installCompletions(shell);
    console.log('');
    // Compute configPath for the restart hint (same logic as installCompletions)
    const home = (await import('node:os')).homedir();
    const { join } = await import('node:path');
    let configPath: string;
    if (shell === 'fish') {
      configPath = join(home, '.config', 'fish', 'conf.d', 'cf.fish');
    } else if (shell === 'zsh') {
      configPath = join(home, '.zshrc');
    } else {
      configPath = join(home, '.bashrc');
    }
    console.log(`Restart your shell or run: source ${configPath}`);
    console.log('');
  } else if (answer === 'n' || answer === 'no') {
    // Just skip this time, will ask again next time
    console.log('');
  } else {
    // "N" or anything else - don't ask again
    updateConfig({
      completions: {
        prompted: true,
        installed: false,
      },
    });
    console.log('');
    console.log('  Run "cf completions install" anytime to enable completions.');
    console.log('');
  }
}
