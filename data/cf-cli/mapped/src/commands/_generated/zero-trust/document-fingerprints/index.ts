/**
 * document-fingerprints command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import createdocumentfingerprints from './create-document-fingerprints.js';
import createv2 from './create-v2.js';
import delete_ from './delete.js';
import getdocumentfingerprints from './get-document-fingerprints.js';
import getfingerprintsall from './get-fingerprints-all.js';
import update from './update.js';

const command: CommandModule = {
  command: 'document-fingerprints',
  describe: 'Document Fingerprints operations',

  builder: (yargs) => {
    return yargs
      .command(createdocumentfingerprints)
      .command(createv2)
      .command(delete_)
      .command(getdocumentfingerprints)
      .command(getfingerprintsall)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
