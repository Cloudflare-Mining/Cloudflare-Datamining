import { isCancel, SelectPrompt } from '@clack/core';
import * as readline from 'readline';
import { colors, getChalk } from './ui/theme.js';

/**
 * Check if we're in a CI environment.
 */
export function isCI(): boolean {
  return (
    process.env.CI !== undefined ||
    process.env.CONTINUOUS_INTEGRATION !== undefined ||
    process.env.GITHUB_ACTIONS !== undefined ||
    process.env.GITLAB_CI !== undefined ||
    process.env.CIRCLECI !== undefined ||
    process.env.JENKINS_URL !== undefined ||
    process.env.BUILDKITE !== undefined ||
    process.env.TRAVIS !== undefined
  );
}

/**
 * Check if running in interactive TTY
 */
export function isInteractive(): boolean {
  return process.stdin.isTTY === true;
}

/**
 * An account option for the interactive picker
 */
export interface AccountOption {
  id: string;
  name: string;
}

/**
 * Prompt the user to select an account from a list using @clack/core.
 *
 * @param accounts - List of available accounts
 * @returns The selected account, or null if the user cancelled
 */
export async function selectAccount(accounts: AccountOption[]): Promise<AccountOption | null> {
  const chalk = getChalk();
  const options = accounts.map((account) => ({
    value: account,
    label: account.name,
  }));

  const prompt = new SelectPrompt({
    options,
    initialValue: options[0]?.value,
    render() {
      const title = chalk.bold('Select an account');

      // Build the options list
      const lines = this.options.map((option, i) => {
        const isActive = i === this.cursor;
        const account = option.value;
        const truncatedId = chalk.hex(colors.muted)(`${account.id.slice(0, 12)}...`);

        if (isActive) {
          return `  ${chalk.hex(colors.orange)('>')} ${chalk.bold(account.name)}  ${truncatedId}`;
        }
        return `    ${chalk.dim(account.name)}  ${truncatedId}`;
      });

      const hint = chalk.dim('(use arrow keys, enter to confirm)');

      return `${title} ${hint}\n${lines.join('\n')}`;
    },
  });

  const result = await prompt.prompt();

  if (isCancel(result) || !result) {
    return null;
  }

  return result;
}

/**
 * Prompt for confirmation before destructive operations.
 * Returns true only if user confirms with 'y' or 'yes'.
 * If not interactive and no force flag, returns false.
 */
export async function confirmDelete(resourceType: string, resourceId: string): Promise<boolean> {
  if (!isInteractive()) {
    return false;
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(
      `Are you sure you want to delete ${resourceType} '${resourceId}'? This cannot be undone. (y/N): `,
      (answer) => {
        rl.close();
        const normalized = answer.trim().toLowerCase();
        resolve(normalized === 'y' || normalized === 'yes');
      },
    );
  });
}
