/**
 * organization-profile command group
 * @generated from apis/organizations/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'organization-profile',
  describe: 'View and update the public profile information for an organization',

  builder: (yargs) => {
    return yargs.command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
