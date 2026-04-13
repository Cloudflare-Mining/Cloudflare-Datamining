/**
 * hostnames command group
 * @generated from apis/web3/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import ipfsuniversalpathscontentlistsentriescreate from './ipfs-universal-paths-content-lists-entries-create.js';
import ipfsuniversalpathscontentlistsentriesdelete from './ipfs-universal-paths-content-lists-entries-delete.js';
import ipfsuniversalpathscontentlistsentriesget from './ipfs-universal-paths-content-lists-entries-get.js';
import ipfsuniversalpathscontentlistsentrieslist from './ipfs-universal-paths-content-lists-entries-list.js';
import ipfsuniversalpathscontentlistsentriesupdate from './ipfs-universal-paths-content-lists-entries-update.js';
import ipfsuniversalpathscontentlistsget from './ipfs-universal-paths-content-lists-get.js';
import ipfsuniversalpathscontentlistsupdate from './ipfs-universal-paths-content-lists-update.js';
import list from './list.js';

const command: CommandModule = {
  command: 'hostnames',
  describe: 'Web3 gateway hostnames with IPFS Universal Path content list management',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(ipfsuniversalpathscontentlistsentriescreate)
      .command(ipfsuniversalpathscontentlistsentriesdelete)
      .command(ipfsuniversalpathscontentlistsentriesget)
      .command(ipfsuniversalpathscontentlistsentrieslist)
      .command(ipfsuniversalpathscontentlistsentriesupdate)
      .command(ipfsuniversalpathscontentlistsget)
      .command(ipfsuniversalpathscontentlistsupdate)
      .command(list)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
