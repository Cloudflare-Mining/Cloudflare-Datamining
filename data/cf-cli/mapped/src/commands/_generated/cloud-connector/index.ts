/**
 * cloud-connector command
 * @generated from apis/cloud-connector/schema.ts
 */
import type { CommandModule } from 'yargs';
import rules from './rules/index.js';

const command: CommandModule = {
  command: 'cloud-connector',
  describe:
    'Route traffic from Cloudflare directly to cloud provider services (AWS, Azure, GCP) without origin servers',

  builder: (yargs) => {
    return yargs.command(rules).demandCommand(1);
  },

  handler: () => {},
};

export default command;
