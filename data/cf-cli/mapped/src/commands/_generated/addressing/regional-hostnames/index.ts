/**
 * regional-hostnames command group
 * @generated from apis/addressing/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import regionslist from './regions-list.js';

const command: CommandModule = {
  command: 'regional-hostnames',
  describe: 'Pin hostnames to specific geographic regions for data locality compliance',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .command(regionslist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
