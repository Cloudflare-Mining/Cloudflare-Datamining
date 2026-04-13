/**
 * previews command group
 * @generated from apis/healthchecks/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';

const command: CommandModule = {
  command: 'previews',
  describe: 'Test a health check configuration before deploying it to production',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
