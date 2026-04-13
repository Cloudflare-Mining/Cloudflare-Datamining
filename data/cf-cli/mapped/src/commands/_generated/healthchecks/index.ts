/**
 * healthchecks command
 * @generated from apis/healthchecks/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';
import previews from './previews/index.js';

const command: CommandModule = {
  command: 'healthchecks',
  describe: "Standalone health checks that monitor origin server availability from Cloudflare's edge",

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .command(update)
      .command(previews)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
