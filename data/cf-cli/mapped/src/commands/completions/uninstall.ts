/**
 * Uninstall shell completions
 *
 * Removes completion script file and source line from shell config
 */
import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import type { CommandModule } from 'yargs';
import { getCompletionsDir, loadConfig, updateConfig } from '../../lib/config.js';

interface UninstallArgs {
  // No additional args
}

/**
 * Get all possible shell config paths
 */
function getShellConfigPaths(): string[] {
  const home = homedir();
  return [
    join(home, '.zshrc'),
    join(home, '.zprofile'),
    join(home, '.bashrc'),
    join(home, '.bash_profile'),
    join(home, '.config', 'fish', 'conf.d', 'cf.fish'),
  ];
}

/**
 * Remove CF CLI completions from a shell config file
 */
function removeFromConfig(configPath: string): boolean {
  if (!existsSync(configPath)) {
    return false;
  }

  const content = readFileSync(configPath, 'utf-8');

  if (!content.includes('# CF CLI completions')) {
    return false;
  }

  // Remove the CF CLI completions section (bash/zsh style)
  let newContent = content
    .replace(/\n?# CF CLI completions\n\[\[.*_cf.*\]\].*source.*\n?/g, '')
    .replace(/\n?# CF CLI completions\n\[\[.*cf\.bash.*\]\].*source.*\n?/g, '');

  // Remove the CF CLI completions section (fish style)
  newContent = newContent.replace(/\n?# CF CLI completions\nif test -f .*\n\s+source .*\nend\n?/g, '');

  // If the file is now empty (e.g., fish conf.d file with only CF block), remove it entirely
  if (newContent.trim() === '') {
    rmSync(configPath);
  } else {
    newContent = newContent.trimEnd() + '\n';
    writeFileSync(configPath, newContent, { mode: 0o644 });
  }
  return true;
}

const uninstallCommand: CommandModule<object, UninstallArgs> = {
  command: 'uninstall',
  describe: 'Remove shell completions',

  handler: async () => {
    console.log('Uninstalling completions...\n');

    const config = loadConfig();
    const completionsDir = getCompletionsDir();
    let removedFiles = 0;
    let removedConfigs = 0;

    // Remove completion script files
    const completionFiles = ['_cf.zsh', 'cf.bash', 'cf.fish'];
    for (const file of completionFiles) {
      const filePath = join(completionsDir, file);
      if (existsSync(filePath)) {
        rmSync(filePath);
        console.log(`  Removed: ${filePath}`);
        removedFiles++;
      }
    }

    // Remove from shell configs
    const configPaths = getShellConfigPaths();
    for (const configPath of configPaths) {
      if (removeFromConfig(configPath)) {
        console.log(`  Cleaned: ${configPath}`);
        removedConfigs++;
      }
    }

    // Update config
    updateConfig({
      completions: {
        prompted: config.completions?.prompted,
        installed: false,
        shell: undefined,
        path: undefined,
      },
    });

    if (removedFiles === 0 && removedConfigs === 0) {
      console.log('  No completions found to remove.');
    } else {
      console.log('\nCompletions uninstalled successfully.');
      console.log('Restart your shell to apply changes.');
    }
  },
};

export default uninstallCommand;
