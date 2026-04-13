/**
 * bot-management command
 * @generated from apis/bot-management/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import update from './update.js';
import feedback from './feedback/index.js';

const command: CommandModule = {
  command: 'bot-management',
  describe:
    'Bot detection and mitigation settings — configure bot scores, JavaScript detections, and challenge behavior',

  builder: (yargs) => {
    return yargs.command(get).command(update).command(feedback).demandCommand(1);
  },

  handler: () => {},
};

export default command;
