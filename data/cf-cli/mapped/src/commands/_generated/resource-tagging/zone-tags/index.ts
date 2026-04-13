/**
 * zone-tags command group
 * @generated from apis/resource-tagging/schema.ts
 */
import type { CommandModule } from 'yargs';
import delete_ from './delete.js';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'zone-tags',
  describe: 'Tags applied to individual zones for categorization and bulk management',

  builder: (yargs) => {
    return yargs.command(delete_).command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
