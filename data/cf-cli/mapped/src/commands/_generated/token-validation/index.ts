/**
 * token-validation command
 * @generated from apis/token-validation/schema.ts
 */
import type { CommandModule } from 'yargs';
import configuration from './configuration/index.js';
import rules from './rules/index.js';
import rulesextra from './rules-extra/index.js';

const command: CommandModule = {
  command: 'token-validation',
  describe: 'Validate JWT tokens at the edge — configure token sources, signing keys, and validation rules',

  builder: (yargs) => {
    return yargs.command(configuration).command(rules).command(rulesextra).demandCommand(1);
  },

  handler: () => {},
};

export default command;
