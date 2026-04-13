/**
 * schemas command group
 * @generated from apis/schema-validation/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'schemas',
  describe: 'Uploaded API schemas used to validate incoming requests against expected formats',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(edit).command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
