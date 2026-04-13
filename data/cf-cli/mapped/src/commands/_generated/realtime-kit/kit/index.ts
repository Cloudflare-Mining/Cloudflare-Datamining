/**
 * kit command group
 * @generated from apis/realtime-kit/schema.ts
 */
import type { CommandModule } from 'yargs';
import meetingsactivesessionmuteallcreate from './meetings-active-session-mute-all-create.js';
import meetingsactivesessionmutecreate from './meetings-active-session-mute-create.js';
import meetingslivestreamget from './meetings-livestream-get.js';
import sessionslivestreamsessionsget from './sessions-livestream-sessions-get.js';

const command: CommandModule = {
  command: 'kit',
  describe: 'Kit operations',

  builder: (yargs) => {
    return yargs
      .command(meetingsactivesessionmuteallcreate)
      .command(meetingsactivesessionmutecreate)
      .command(meetingslivestreamget)
      .command(sessionslivestreamsessionsget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
