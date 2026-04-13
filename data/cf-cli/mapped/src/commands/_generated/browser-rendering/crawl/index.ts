/**
 * crawl command group
 * @generated from apis/browser-rendering/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';

const command: CommandModule = {
  command: 'crawl',
  describe: 'Crawl operations',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
