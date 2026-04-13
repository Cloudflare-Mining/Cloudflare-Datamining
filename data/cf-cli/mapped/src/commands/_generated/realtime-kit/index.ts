/**
 * realtime-kit command
 * @generated from apis/realtime-kit/schema.ts
 */
import type { CommandModule } from 'yargs';
import activesession from './active-session/index.js';
import analytics from './analytics/index.js';
import apps from './apps/index.js';
import kit from './kit/index.js';
import livestreams from './livestreams/index.js';
import meetings from './meetings/index.js';
import presets from './presets/index.js';
import recordings from './recordings/index.js';
import sessions from './sessions/index.js';
import webhooks from './webhooks/index.js';

const command: CommandModule = {
  command: 'realtime-kit',
  describe:
    'Real-time video and audio — meetings, livestreams, recordings, and session management via Cloudflare Calls',

  builder: (yargs) => {
    return yargs
      .command(activesession)
      .command(analytics)
      .command(apps)
      .command(kit)
      .command(livestreams)
      .command(meetings)
      .command(presets)
      .command(recordings)
      .command(sessions)
      .command(webhooks)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
