/**
 * pages command
 * @generated from apis/pages/schema.ts
 */
import type { CommandModule } from 'yargs';
import projects from './projects/index.js';

const command: CommandModule = {
  command: 'pages',
  describe: 'Full-stack application hosting with Git-integrated builds, preview deployments, and custom domains',

  builder: (yargs) => {
    return yargs.command(projects).demandCommand(1);
  },

  handler: () => {},
};

export default command;
