/**
 * active-session command group
 * @generated from apis/realtime-kit/schema.ts
 */
import type { CommandModule } from 'yargs';
import createpoll from './create-poll.js';
import getactivesession from './get-active-session.js';
import kickallparticipants from './kick-all-participants.js';
import kickparticipants from './kick-participants.js';

const command: CommandModule = {
  command: 'active-session',
  describe: 'Currently active meeting sessions with live participant counts and controls',

  builder: (yargs) => {
    return yargs
      .command(createpoll)
      .command(getactivesession)
      .command(kickallparticipants)
      .command(kickparticipants)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
