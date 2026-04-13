/**
 * durable-objects command
 * @generated from apis/durable-objects/schema.ts
 */
import type { CommandModule } from 'yargs';
import namespaces from './namespaces/index.js';

const command: CommandModule = {
  command: 'durable-objects',
  describe:
    'Stateful serverless objects with transactional storage, ideal for coordination, sessions, and real-time collaboration',

  builder: (yargs) => {
    return yargs.command(namespaces).demandCommand(1);
  },

  handler: () => {},
};

export default command;
