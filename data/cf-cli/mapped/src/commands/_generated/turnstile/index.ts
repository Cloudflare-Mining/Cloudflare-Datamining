/**
 * turnstile command
 * @generated from apis/turnstile/schema.ts
 */
import type { CommandModule } from 'yargs';
import widgets from './widgets/index.js';

const command: CommandModule = {
  command: 'turnstile',
  describe: 'CAPTCHA-free bot verification widgets that protect forms and APIs without degrading user experience',

  builder: (yargs) => {
    return yargs.command(widgets).demandCommand(1);
  },

  handler: () => {},
};

export default command;
