/**
 * waf-extra command group
 * @generated from apis/firewall/schema.ts
 */
import type { CommandModule } from 'yargs';
import packagesedit from './packages-edit.js';

const command: CommandModule = {
  command: 'waf-extra',
  describe: 'Waf (additional) operations',

  builder: (yargs) => {
    return yargs.command(packagesedit).demandCommand(1);
  },

  handler: () => {},
};

export default command;
