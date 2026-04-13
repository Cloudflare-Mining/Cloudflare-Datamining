/**
 * phases-extra command group
 * @generated from apis/rulesets/schema.ts
 */
import type { CommandModule } from 'yargs';
import entrypointget from './entrypoint-get.js';
import entrypointupdate from './entrypoint-update.js';
import entrypointversionsget from './entrypoint-versions-get.js';
import entrypointversionslist from './entrypoint-versions-list.js';

const command: CommandModule = {
  command: 'phases-extra',
  describe: 'Phases (additional) operations',

  builder: (yargs) => {
    return yargs
      .command(entrypointget)
      .command(entrypointupdate)
      .command(entrypointversionsget)
      .command(entrypointversionslist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
