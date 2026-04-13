/**
 * namespaces command group
 * @generated from apis/durable-objects/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';
import objectslist from './objects-list.js';

const command: CommandModule = {
  command: 'namespaces',
  describe: 'List Durable Object namespaces and inspect individual object instances within them',

  builder: (yargs) => {
    return yargs.command(list).command(objectslist).demandCommand(1);
  },

  handler: () => {},
};

export default command;
