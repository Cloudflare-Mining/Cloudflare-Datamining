/**
 * calls command
 * @generated from apis/calls/schema.ts
 */
import type { CommandModule } from 'yargs';
import sfu from './sfu/index.js';
import turn from './turn/index.js';

const command: CommandModule = {
  command: 'calls',
  describe: 'Real-time audio/video communication infrastructure — SFU apps for WebRTC and TURN relay keys',

  builder: (yargs) => {
    return yargs.command(sfu).command(turn).demandCommand(1);
  },

  handler: () => {},
};

export default command;
