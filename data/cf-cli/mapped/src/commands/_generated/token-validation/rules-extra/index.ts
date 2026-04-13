/**
 * rules-extra command group
 * @generated from apis/token-validation/schema.ts
 */
import type { CommandModule } from 'yargs';
import previewcreate from './preview-create.js';

const command: CommandModule = {
  command: 'rules-extra',
  describe: 'Rules (additional) operations',

  builder: (yargs) => {
    return yargs.command(previewcreate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
