/**
 * logs command group
 * @generated from apis/ai-gateway/schema.ts
 */
import type { CommandModule } from 'yargs';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import request from './request.js';
import response from './response.js';

const command: CommandModule = {
  command: 'logs',
  describe: 'Inspect individual request/response pairs that passed through the gateway',

  builder: (yargs) => {
    return yargs
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .command(request)
      .command(response)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
