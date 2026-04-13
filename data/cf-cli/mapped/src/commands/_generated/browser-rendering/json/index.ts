/**
 * json command group
 * @generated from apis/browser-rendering/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';

const command: CommandModule = {
  command: 'json',
  describe: 'Extract structured JSON data from rendered pages using selectors',

  builder: (yargs) => {
    return yargs.command(create).demandCommand(1);
  },

  handler: () => {},
};

export default command;
