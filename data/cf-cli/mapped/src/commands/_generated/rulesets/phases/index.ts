/**
 * phases command group
 * @generated from apis/rulesets/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import update from './update.js';
import versionsget from './versions-get.js';
import versionslist from './versions-list.js';

const command: CommandModule = {
  command: 'phases',
  describe:
    'Execution phases that determine when rulesets run in the request lifecycle (e.g. http_request_firewall_custom)',

  builder: (yargs) => {
    return yargs.command(get).command(update).command(versionsget).command(versionslist).demandCommand(1);
  },

  handler: () => {},
};

export default command;
