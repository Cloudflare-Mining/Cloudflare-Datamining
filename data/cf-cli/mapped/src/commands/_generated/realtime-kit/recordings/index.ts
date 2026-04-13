/**
 * recordings command group
 * @generated from apis/realtime-kit/schema.ts
 */
import type { CommandModule } from 'yargs';
import getactiverecordings from './get-active-recordings.js';
import getonerecording from './get-one-recording.js';
import getrecordings from './get-recordings.js';
import pauseresumestoprecording from './pause-resume-stop-recording.js';
import startrecordings from './start-recordings.js';
import starttrackrecording from './start-track-recording.js';

const command: CommandModule = {
  command: 'recordings',
  describe: 'Meeting recordings — list, download, and manage recorded video and audio files',

  builder: (yargs) => {
    return yargs
      .command(getactiverecordings)
      .command(getonerecording)
      .command(getrecordings)
      .command(pauseresumestoprecording)
      .command(startrecordings)
      .command(starttrackrecording)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
