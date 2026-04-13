/**
 * vectorize command
 * @generated from apis/vectorize/schema.ts
 */
import type { CommandModule } from 'yargs';
import indexes from './indexes/index.js';
import indexesextra from './indexes-extra/index.js';

const command: CommandModule = {
  command: 'vectorize',
  describe:
    'Globally distributed vector database for building semantic search, recommendations, and RAG applications on Workers',

  builder: (yargs) => {
    return yargs.command(indexes).command(indexesextra).demandCommand(1);
  },

  handler: () => {},
};

export default command;
