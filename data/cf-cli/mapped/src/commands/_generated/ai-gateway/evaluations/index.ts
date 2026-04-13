/**
 * evaluations command group
 * @generated from apis/ai-gateway/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'evaluations',
  describe: 'Run quality evaluations against gateway logs or datasets to score model outputs',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
