/**
 * Shell completions command
 *
 * cf completions [bash|zsh|fish]  - Output completion script to stdout
 * cf completions install          - Install completions to shell config
 * cf completions uninstall        - Remove completions from shell config
 */
import type { Argv, CommandModule } from 'yargs';
import { BASH_COMPLETION_SCRIPT } from '../../lib/completions/bash.js';
import { FISH_COMPLETION_SCRIPT } from '../../lib/completions/fish.js';
import { ZSH_COMPLETION_SCRIPT } from '../../lib/completions/zsh.js';
import installCommand from './install.js';
import uninstallCommand from './uninstall.js';

type Shell = 'bash' | 'zsh' | 'fish';

interface CompletionsArgs {
  shell?: Shell;
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
 * Get completion script for a shell
 */
function getCompletionScript(shell: Shell): string {
  switch (shell) {
    case 'zsh':
      return ZSH_COMPLETION_SCRIPT;
    case 'fish':
      return FISH_COMPLETION_SCRIPT;
    case 'bash':
    default:
      return BASH_COMPLETION_SCRIPT;
  }
}

const completionsCommand: CommandModule<object, CompletionsArgs> & { describe: string } = {
  command: 'completions [shell]',
  describe: 'Install and manage shell completion scripts',

  builder: (yargs: Argv): Argv<CompletionsArgs> => {
    return yargs
      .positional('shell', {
        type: 'string',
        choices: ['bash', 'zsh', 'fish'] as const,
        description: 'Shell type (default: auto-detect from $SHELL)',
      })
      .command(installCommand)
      .command(uninstallCommand)
      .example('cf completions', 'Output completion script for detected shell')
      .example('cf completions bash', 'Output bash completion script')
      .example('cf completions zsh', 'Output zsh completion script')
      .example('cf completions fish', 'Output fish completion script')
      .example('cf completions install', 'Install completions to your shell config')
      .example('source <(cf completions)', 'Load completions in current session') as Argv<CompletionsArgs>;
  },

  handler: async (argv) => {
    // If no shell specified, detect from environment
    const shell = argv.shell || detectShell();

    // Output completion script to stdout
    const script = getCompletionScript(shell);
    console.log(script);
  },
};

export default completionsCommand;
