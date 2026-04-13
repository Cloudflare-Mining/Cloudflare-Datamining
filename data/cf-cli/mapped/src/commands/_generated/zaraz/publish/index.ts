/**
 * publish command group
 * @generated from apis/zaraz/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';

const command: CommandModule = {
  command: 'publish',
  describe: 'Publish pending Zaraz configuration changes to make them live on the zone',

  builder: (yargs) => {
    return yargs.command(create).demandCommand(1);
  },

  handler: () => {},
};

export default command;
