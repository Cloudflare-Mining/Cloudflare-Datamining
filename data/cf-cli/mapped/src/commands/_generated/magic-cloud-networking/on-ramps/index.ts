/**
 * on-ramps command group
 * @generated from apis/magic-cloud-networking/schema.ts
 */
import type { CommandModule } from 'yargs';
import addressspacesedit from './address-spaces-edit.js';
import addressspaceslist from './address-spaces-list.js';
import addressspacesupdate from './address-spaces-update.js';
import apply from './apply.js';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import export_ from './export.js';
import get from './get.js';
import list from './list.js';
import plan from './plan.js';
import update from './update.js';

const command: CommandModule = {
  command: 'on-ramps',
  describe: 'On-ramp connections that bridge cloud VPCs/VNets to your Cloudflare network',

  builder: (yargs) => {
    return yargs
      .command(addressspacesedit)
      .command(addressspaceslist)
      .command(addressspacesupdate)
      .command(apply)
      .command(create)
      .command(delete_)
      .command(edit)
      .command(export_)
      .command(get)
      .command(list)
      .command(plan)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
