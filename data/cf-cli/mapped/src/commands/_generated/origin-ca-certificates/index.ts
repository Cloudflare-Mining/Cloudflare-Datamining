/**
 * origin-ca-certificates command
 * @generated from apis/origin-ca-certificates/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'origin-ca-certificates',
  describe: 'Free Cloudflare-signed certificates installed on your origin server for Full (strict) SSL mode',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
