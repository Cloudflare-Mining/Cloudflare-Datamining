/**
 * livestreams command group
 * @generated from apis/realtime-kit/schema.ts
 */
import type { CommandModule } from 'yargs';
import getactivelivestreamsforlivestreamid from './get-active-livestreams-for-livestream-id.js';
import getalllivestreams from './get-all-livestreams.js';
import getlivestreamanalyticscomplete from './get-livestream-analytics-complete.js';
import getlivestreamsessiondetailsforsessionid from './get-livestream-session-details-for-session-id.js';
import getlivestreamsessionforlivestreamid from './get-livestream-session-for-livestream-id.js';
import getmeetingactivelivestreams from './get-meeting-active-livestreams.js';
import getorganalytics from './get-org-analytics.js';
import startlivestreamingameeting from './start-livestreaming-a-meeting.js';
import stoplivestreamingameeting from './stop-livestreaming-a-meeting.js';

const command: CommandModule = {
  command: 'livestreams',
  describe: 'Live streaming from meetings to external platforms with stream key management',

  builder: (yargs) => {
    return yargs
      .command(getactivelivestreamsforlivestreamid)
      .command(getalllivestreams)
      .command(getlivestreamanalyticscomplete)
      .command(getlivestreamsessiondetailsforsessionid)
      .command(getlivestreamsessionforlivestreamid)
      .command(getmeetingactivelivestreams)
      .command(getorganalytics)
      .command(startlivestreamingameeting)
      .command(stoplivestreamingameeting)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
