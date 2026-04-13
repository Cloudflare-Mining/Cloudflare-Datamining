/**
 * indexes command group
 * @generated from apis/vectorize/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import deletebyids from './delete-by-ids.js';
import get from './get.js';
import getbyids from './get-by-ids.js';
import info from './info.js';
import insert from './insert.js';
import list from './list.js';
import listvectors from './list-vectors.js';
import metadataindexcreate from './metadata-index-create.js';
import metadataindexdelete from './metadata-index-delete.js';
import metadataindexlist from './metadata-index-list.js';
import query from './query.js';
import upsert from './upsert.js';

const command: CommandModule = {
  command: 'indexes',
  describe:
    'Vector indexes — create indexes, insert/query/upsert vectors, and manage metadata indexes for filtered search',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(deletebyids)
      .command(get)
      .command(getbyids)
      .command(info)
      .command(insert)
      .command(list)
      .command(listvectors)
      .command(metadataindexcreate)
      .command(metadataindexdelete)
      .command(metadataindexlist)
      .command(query)
      .command(upsert)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
