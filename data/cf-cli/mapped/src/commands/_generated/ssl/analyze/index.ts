/**
 * analyze command group
 * @generated from apis/ssl/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';

const command: CommandModule = {
  command: 'analyze',
  describe: 'Analyze a certificate or certificate chain for validity and compatibility issues',

  builder: (yargs) => {
    return yargs.command(create).demandCommand(1);
  },

  handler: () => {},
};

export default command;
