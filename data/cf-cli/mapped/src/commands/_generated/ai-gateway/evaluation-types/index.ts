/**
 * evaluation-types command group
 * @generated from apis/ai-gateway/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'evaluation-types',
  describe: 'Available evaluator types for scoring AI gateway responses (accuracy, toxicity, etc.)',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
