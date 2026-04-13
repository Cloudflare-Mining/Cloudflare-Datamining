/**
 * ai command
 * @generated from apis/ai/schema.ts
 */
import type { CommandModule } from 'yargs';
import run from './run.js';
import authors from './authors/index.js';
import finetunes from './finetunes/index.js';
import models from './models/index.js';
import rags from './rags/index.js';
import runextra from './run-extra/index.js';
import settings from './settings/index.js';
import tasks from './tasks/index.js';
import tomarkdown from './to-markdown/index.js';

const command: CommandModule = {
  command: 'ai',
  describe: 'Run inference on Workers AI models — text generation, image classification, embeddings, and more',

  builder: (yargs) => {
    return yargs
      .command(run)
      .command(authors)
      .command(finetunes)
      .command(models)
      .command(rags)
      .command(runextra)
      .command(settings)
      .command(tasks)
      .command(tomarkdown)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
