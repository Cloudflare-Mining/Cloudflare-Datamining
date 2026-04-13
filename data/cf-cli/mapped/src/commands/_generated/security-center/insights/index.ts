/**
 * insights command group
 * @generated from apis/security-center/schema.ts
 */
import type { CommandModule } from 'yargs';
import classget from './class-get.js';
import dismiss from './dismiss.js';
import list from './list.js';
import severityget from './severity-get.js';
import typeget from './type-get.js';

const command: CommandModule = {
  command: 'insights',
  describe: 'Security findings and recommendations across your account — DNS, SSL, WAF misconfigurations, etc.',

  builder: (yargs) => {
    return yargs
      .command(classget)
      .command(dismiss)
      .command(list)
      .command(severityget)
      .command(typeget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
