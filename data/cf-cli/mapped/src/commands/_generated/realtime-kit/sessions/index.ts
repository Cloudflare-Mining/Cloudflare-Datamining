/**
 * sessions command group
 * @generated from apis/realtime-kit/schema.ts
 */
import type { CommandModule } from 'yargs';
import generatesummaryoftranscripts from './generate-summary-of-transcripts.js';
import getparticipantdatafrompeerid from './get-participant-data-from-peer-id.js';
import getsessionchat from './get-session-chat.js';
import getsessiondetails from './get-session-details.js';
import getsessionparticipantdetails from './get-session-participant-details.js';
import getsessionparticipants from './get-session-participants.js';
import getsessionsummary from './get-session-summary.js';
import getsessiontranscripts from './get-session-transcripts.js';
import getsessions from './get-sessions.js';

const command: CommandModule = {
  command: 'sessions',
  describe: 'Active and historical meeting sessions with participant details and duration tracking',

  builder: (yargs) => {
    return yargs
      .command(generatesummaryoftranscripts)
      .command(getparticipantdatafrompeerid)
      .command(getsessionchat)
      .command(getsessiondetails)
      .command(getsessionparticipantdetails)
      .command(getsessionparticipants)
      .command(getsessionsummary)
      .command(getsessiontranscripts)
      .command(getsessions)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
