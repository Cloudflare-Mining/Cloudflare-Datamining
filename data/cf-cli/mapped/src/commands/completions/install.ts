/**
 * Install shell completions
 *
 * Creates completion script file and adds source line to shell config
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import type { CommandModule } from 'yargs';
import { BASH_COMPLETION_SCRIPT } from '../../lib/completions/bash.js';
import { FISH_COMPLETION_SCRIPT } from '../../lib/completions/fish.js';
import { ZSH_COMPLETION_SCRIPT } from '../../lib/completions/zsh.js';
import { ensureCompletionsDir, getCompletionsDir, updateConfig } from '../../lib/config.js';
import { hint, info, success, theme } from '../../lib/ui/index.js';

type Shell = 'bash' | 'zsh' | 'fish';

interface InstallArgs {
  shell?: Shell;
  force?: boolean;
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

  // Default to bash
  return 'bash';
}

/**
 * Get shell config file path
 */
function getShellConfigPath(shell: Shell): string {
  const home = homedir();

  switch (shell) {
    case 'zsh':
      // Check for .zshrc first, then .zprofile
      const zshrc = join(home, '.zshrc');
      if (existsSync(zshrc)) {
        return zshrc;
      }
      return zshrc; // Create .zshrc if it doesn't exist
    case 'fish':
      // Fish uses conf.d directory for auto-loaded configs
      const fishConfD = join(home, '.config', 'fish', 'conf.d');
      return join(fishConfD, 'cf.fish');
    case 'bash':
      // Check for .bashrc first, then .bash_profile
      const bashrc = join(home, '.bashrc');
      if (existsSync(bashrc)) {
        return bashrc;
      }
      const bashProfile = join(home, '.bash_profile');
      if (existsSync(bashProfile)) {
        return bashProfile;
      }
      return bashrc; // Create .bashrc if neither exists
  }
}

/**
 * Get completion script filename
 */
function getCompletionFilename(shell: Shell): string {
  switch (shell) {
    case 'zsh':
      return '_cf.zsh';
    case 'fish':
      return 'cf.fish';
    case 'bash':
      return 'cf.bash';
  }
}

/**
 * Get completion script content
 */
function getCompletionScript(shell: Shell): string {
  switch (shell) {
    case 'zsh':
      return ZSH_COMPLETION_SCRIPT;
    case 'fish':
      return FISH_COMPLETION_SCRIPT;
    case 'bash':
      return BASH_COMPLETION_SCRIPT;
  }
}

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
 * Generate the source line for shell config
 */
function getSourceLine(completionPath: string, shell: Shell): string {
  const marker = '# CF CLI completions';
  const safePath = escapeShellPath(completionPath);

  switch (shell) {
    case 'zsh':
      return `${marker}\n[[ -f "${safePath}" ]] && source "${safePath}"`;
    case 'fish':
      // Fish conf.d files are auto-sourced; write a source directive pointing to the completion script
      return `${marker}\nif test -f "${safePath}"\n    source "${safePath}"\nend`;
    case 'bash':
      return `${marker}\n[[ -f "${safePath}" ]] && source "${safePath}"`;
  }
}

/**
 * Check if completions are already installed in shell config
 */
function isAlreadyInstalled(configPath: string): boolean {
  if (!existsSync(configPath)) {
    return false;
  }

  const content = readFileSync(configPath, 'utf-8');
  return content.includes('# CF CLI completions');
}

const installCommand: CommandModule<object, InstallArgs> = {
  command: 'install',
  describe: 'Install shell completions',

  builder: (yargs) => {
    return yargs
      .option('shell', {
        type: 'string',
        choices: ['bash', 'zsh', 'fish'] as const,
        description: 'Shell type (default: auto-detect)',
      })
      .option('force', {
        type: 'boolean',
        alias: 'f',
        description: 'Overwrite existing installation',
        default: false,
      });
  },

  handler: async (argv) => {
    const shell = (argv.shell as Shell) || detectShell();

    console.log(`${theme.info('Detected shell:')} ${theme.bold(shell)}`);
    console.log(info('Installing completions...\n'));

    // Ensure completions directory exists
    ensureCompletionsDir();
    const completionsDir = getCompletionsDir();

    // Write completion script
    const filename = getCompletionFilename(shell);
    const completionPath = join(completionsDir, filename);
    const script = getCompletionScript(shell);

    writeFileSync(completionPath, script, { mode: 0o644 });
    console.log(success(`Created: ${theme.muted(completionPath)}`));

    // Get shell config path
    const configPath = getShellConfigPath(shell);

    // Ensure parent directory exists (e.g., ~/.config/fish/conf.d/)
    const configDir = dirname(configPath);
    if (!existsSync(configDir)) {
      mkdirSync(configDir, { recursive: true, mode: 0o755 });
    }

    // Check if already installed
    if (isAlreadyInstalled(configPath) && !argv.force) {
      console.log(info(`Already configured in: ${theme.muted(configPath)}`));
      console.log(hint(`Use ${theme.code('--force')} to reinstall.`));
    } else {
      // Add source line to shell config
      const sourceLine = getSourceLine(completionPath, shell);

      // Read existing config or create empty
      let configContent = '';
      if (existsSync(configPath)) {
        configContent = readFileSync(configPath, 'utf-8');
        // Remove old CF CLI completions section if present (bash/zsh style)
        configContent = configContent.replace(/\n?# CF CLI completions\n\[\[.*_cf.*\]\].*source.*\n?/g, '');
        // Remove old CF CLI completions section (fish style)
        configContent = configContent.replace(/\n?# CF CLI completions\nif test -f .*\n\s+source .*\nend\n?/g, '');
      }

      // Append source line
      configContent = configContent.trimEnd() + '\n\n' + sourceLine + '\n';
      writeFileSync(configPath, configContent, { mode: 0o644 });
      console.log(success(`Updated: ${theme.muted(configPath)}`));
    }

    // Update config
    updateConfig({
      completions: {
        prompted: true,
        installed: true,
        shell,
        path: completionPath,
      },
    });

    console.log(hint('\nRestart your shell or run:'));
    console.log(`  ${theme.code(`source ${configPath}`)}`);
  },
};

export default installCommand;
