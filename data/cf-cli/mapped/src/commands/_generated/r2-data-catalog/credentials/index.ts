/**
 * credentials command group
 * @generated from apis/r2-data-catalog/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';

const command: CommandModule = {
  command: 'credentials',
  describe: 'Catalog access credentials for external query engines (Spark, Trino, etc.)',

  builder: (yargs) => {
    return yargs.command(create).demandCommand(1);
  },

  handler: () => {},
};

export default command;
