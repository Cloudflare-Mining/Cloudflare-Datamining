/**
 * dns command group
 * @generated from apis/email-routing/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';

const command: CommandModule = {
  command: 'dns',
  describe: 'DNS records required for email routing (MX, SPF, DKIM) — enable, lock, or disable',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(edit).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
