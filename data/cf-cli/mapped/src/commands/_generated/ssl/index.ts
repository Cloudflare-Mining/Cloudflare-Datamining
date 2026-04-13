/**
 * ssl command
 * @generated from apis/ssl/schema.ts
 */
import type { CommandModule } from 'yargs';
import analyze from './analyze/index.js';
import certificatepacks from './certificate-packs/index.js';
import recommendations from './recommendations/index.js';
import universal from './universal/index.js';
import verification from './verification/index.js';

const command: CommandModule = {
  command: 'ssl',
  describe:
    'SSL/TLS certificate management — certificate packs, Universal SSL, verification, and TLS mode recommendations',

  builder: (yargs) => {
    return yargs
      .command(analyze)
      .command(certificatepacks)
      .command(recommendations)
      .command(universal)
      .command(verification)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
