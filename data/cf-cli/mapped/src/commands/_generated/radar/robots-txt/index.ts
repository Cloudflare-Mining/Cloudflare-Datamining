/**
 * robots-txt command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import topdomaincategories from './top-domain-categories.js';
import topuseragentsdirective from './top-user-agents-directive.js';

const command: CommandModule = {
  command: 'robots-txt',
  describe: 'Robots.txt adoption and crawler directive trends across the web',

  builder: (yargs) => {
    return yargs.command(topdomaincategories).command(topuseragentsdirective).demandCommand(1);
  },

  handler: () => {},
};

export default command;
