/**
 * rules command
 * @generated from apis/rules/schema.ts
 */
import type { CommandModule } from 'yargs';
import lists from './lists/index.js';

const command: CommandModule = {
  command: 'rules',
  describe:
    'Account-level IP lists, hostname lists, and other reusable lists referenced by firewall rules and rulesets',

  builder: (yargs) => {
    return yargs.command(lists).demandCommand(1);
  },

  handler: () => {},
};

export default command;
