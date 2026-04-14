/**
 * ai-search command
 * @generated from apis/ai-search/schema.ts
 */
import type { CommandModule } from 'yargs';
import instances from './instances/index.js';
import instancesextra from './instances-extra/index.js';
import namespaces from './namespaces/index.js';
import tokens from './tokens/index.js';

const command: CommandModule = {
  command: 'ai-search',
  describe:
    'Managed search-as-a-service — crawl, index, and query content with AI-powered relevance and chat completions',

  builder: (yargs) => {
    return yargs.command(instances).command(instancesextra).command(namespaces).command(tokens).demandCommand(1);
  },

  handler: () => {},
};

export default command;
