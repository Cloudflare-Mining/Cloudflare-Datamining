/**
 * vpc-flows command group
 * @generated from apis/magic-network-monitoring/schema.ts
 */
import type { CommandModule } from 'yargs';
import tokenscreate from './tokens-create.js';

const command: CommandModule = {
  command: 'vpc-flows',
  describe: 'Ingest VPC flow logs from cloud providers for network visibility and anomaly detection',

  builder: (yargs) => {
    return yargs.command(tokenscreate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
