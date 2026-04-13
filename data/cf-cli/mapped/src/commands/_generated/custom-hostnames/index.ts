/**
 * custom-hostnames command
 * @generated from apis/custom-hostnames/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import certificatepack from './certificate-pack/index.js';
import fallbackorigin from './fallback-origin/index.js';

const command: CommandModule = {
  command: 'custom-hostnames',
  describe: 'Bring custom vanity domains to your SaaS zone with per-hostname SSL and origin mapping',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .command(certificatepack)
      .command(fallbackorigin)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
