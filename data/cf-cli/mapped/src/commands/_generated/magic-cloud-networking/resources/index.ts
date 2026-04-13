/**
 * resources command group
 * @generated from apis/magic-cloud-networking/schema.ts
 */
import type { CommandModule } from 'yargs';
import export_ from './export.js';
import get from './get.js';
import list from './list.js';
import policypreview from './policy-preview.js';

const command: CommandModule = {
  command: 'resources',
  describe: 'Discovered cloud resources (VPCs, subnets, route tables) from connected cloud accounts',

  builder: (yargs) => {
    return yargs.command(export_).command(get).command(list).command(policypreview).demandCommand(1);
  },

  handler: () => {},
};

export default command;
