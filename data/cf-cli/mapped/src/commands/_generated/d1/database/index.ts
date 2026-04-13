/**
 * database command group
 * @generated from apis/d1/schema.ts
 */
import type { CommandModule } from 'yargs';
import edit from './edit.js';
import importcreate from './import-create.js';
import rawcreate from './raw-create.js';
import update from './update.js';

const command: CommandModule = {
  command: 'database',
  describe: 'Database operations',

  builder: (yargs) => {
    return yargs.command(edit).command(importcreate).command(rawcreate).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
