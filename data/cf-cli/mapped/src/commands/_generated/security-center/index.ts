/**
 * security-center command
 * @generated from apis/security-center/schema.ts
 */
import type { CommandModule } from 'yargs';
import insights from './insights/index.js';
import insightsextra from './insights-extra/index.js';

const command: CommandModule = {
  command: 'security-center',
  describe: 'Security posture dashboard — view and manage security insights, misconfigurations, and vulnerabilities',

  builder: (yargs) => {
    return yargs.command(insights).command(insightsextra).demandCommand(1);
  },

  handler: () => {},
};

export default command;
