/**
 * ai-gateway command
 * @generated from apis/ai-gateway/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';
import datasets from './datasets/index.js';
import dynamicrouting from './dynamic-routing/index.js';
import evaluationtypes from './evaluation-types/index.js';
import evaluations from './evaluations/index.js';
import logs from './logs/index.js';
import providerconfigs from './provider-configs/index.js';
import urls from './urls/index.js';

const command: CommandModule = {
  command: 'ai-gateway',
  describe: 'Proxy, cache, rate-limit, and observe requests to AI providers — OpenAI, Anthropic, Workers AI, and more',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(get)
      .command(list)
      .command(update)
      .command(datasets)
      .command(dynamicrouting)
      .command(evaluationtypes)
      .command(evaluations)
      .command(logs)
      .command(providerconfigs)
      .command(urls)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
