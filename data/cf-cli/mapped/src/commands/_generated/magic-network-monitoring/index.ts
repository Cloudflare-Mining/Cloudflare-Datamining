/**
 * magic-network-monitoring command
 * @generated from apis/magic-network-monitoring/schema.ts
 */
import type { CommandModule } from 'yargs';
import configs from './configs/index.js';
import rules from './rules/index.js';
import vpcflows from './vpc-flows/index.js';

const command: CommandModule = {
  command: 'magic-network-monitoring',
  describe: 'Flow-based network traffic monitoring with configurable alerting rules and VPC flow ingestion',

  builder: (yargs) => {
    return yargs.command(configs).command(rules).command(vpcflows).demandCommand(1);
  },

  handler: () => {},
};

export default command;
