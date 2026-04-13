/**
 * url-scanner command
 * @generated from apis/url-scanner/schema.ts
 */
import type { CommandModule } from 'yargs';
import response from './response/index.js';
import responses from './responses/index.js';
import scan from './scan/index.js';
import scans from './scans/index.js';

const command: CommandModule = {
  command: 'url-scanner',
  describe: 'Scan URLs for phishing, malware, and other threats — submit scans and retrieve detailed results',

  builder: (yargs) => {
    return yargs.command(response).command(responses).command(scan).command(scans).demandCommand(1);
  },

  handler: () => {},
};

export default command;
