/**
 * billing command
 * @generated from apis/billing/schema.ts
 */
import type { CommandModule } from 'yargs';
import profiles from './profiles/index.js';
import usage from './usage/index.js';

const command: CommandModule = {
  command: 'billing',
  describe: 'Account billing profiles and usage data for Cloudflare subscriptions and add-on services',

  builder: (yargs) => {
    return yargs.command(profiles).command(usage).demandCommand(1);
  },

  handler: () => {},
};

export default command;
