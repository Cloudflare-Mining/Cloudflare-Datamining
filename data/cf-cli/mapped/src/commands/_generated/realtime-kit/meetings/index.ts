/**
 * meetings command group
 * @generated from apis/realtime-kit/schema.ts
 */
import type { CommandModule } from 'yargs';
import addparticipant from './add-participant.js';
import create from './create.js';
import deletemeetingparticipant from './delete-meeting-participant.js';
import editparticipant from './edit-participant.js';
import get from './get.js';
import getmeetingbyid from './get-meeting-by-id.js';
import getmeetingparticipant from './get-meeting-participant.js';
import getmeetingparticipants from './get-meeting-participants.js';
import refreshparticipanttoken from './refresh-participant-token.js';
import replacemeetingbyid from './replace-meeting-by-id.js';
import updatemeetingbyid from './update-meeting-by-id.js';

const command: CommandModule = {
  command: 'meetings',
  describe: 'Video meetings with participant management, access tokens, and recording controls',

  builder: (yargs) => {
    return yargs
      .command(addparticipant)
      .command(create)
      .command(deletemeetingparticipant)
      .command(editparticipant)
      .command(get)
      .command(getmeetingbyid)
      .command(getmeetingparticipant)
      .command(getmeetingparticipants)
      .command(refreshparticipanttoken)
      .command(replacemeetingbyid)
      .command(updatemeetingbyid)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
