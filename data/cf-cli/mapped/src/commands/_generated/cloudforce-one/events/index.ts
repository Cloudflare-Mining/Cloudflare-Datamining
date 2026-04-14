/**
 * events command group
 * @generated from apis/cloudforce-one/schema.ts
 */
import type { CommandModule } from 'yargs';
import aggregateget from './aggregate-get.js';
import categoriescatalogget from './categories-catalog-get.js';
import categoriescreate from './categories-create.js';
import create from './create.js';
import createbulkrelationshipscreate from './create-bulk-relationships-create.js';
import datasetcopycreate from './dataset-copy-create.js';
import datasetcreate from './dataset-create.js';
import datasetdelete from './dataset-delete.js';
import dataseteventsget from './dataset-events-get.js';
import datasetgroupscreate from './dataset-groups-create.js';
import datasetgroupsdelete from './dataset-groups-delete.js';
import datasetgroupsgetgroup from './dataset-groups-get-group.js';
import datasetgroupsgetv2 from './dataset-groups-get-v2.js';
import datasetgroupsmemberscreate from './dataset-groups-members-create.js';
import datasetgroupsmembersdelete from './dataset-groups-members-delete.js';
import datasetgroupsmembersget from './dataset-groups-members-get.js';
import datasetgroupsupdate from './dataset-groups-update.js';
import datasetindicatortypescreatecreate from './dataset-indicator-types-create-create.js';
import datasetindicatorsbulkcreate from './dataset-indicators-bulk-create.js';
import datasetindicatorscreatecreate from './dataset-indicators-create-create.js';
import datasetindicatorsdelete from './dataset-indicators-delete.js';
import datasetindicatorsgetindicator from './dataset-indicators-get-indicator.js';
import datasetindicatorsgetindicatorlegacy from './dataset-indicators-get-indicator-legacy.js';
import datasetindicatorspatch from './dataset-indicators-patch.js';
import datasetindicatorstagsget from './dataset-indicators-tags-get.js';
import datasetmovecreate from './dataset-move-create.js';
import datasetpermissionscreate from './dataset-permissions-create.js';
import datasetpermissionsdelete from './dataset-permissions-delete.js';
import datasetpermissionsget from './dataset-permissions-get.js';
import datasetpermissionsupdate from './dataset-permissions-update.js';
import datasettagsindicatorsget from './dataset-tags-indicators-get.js';
import datasettargetindustriesget from './dataset-target-industries-get.js';
import datasetspopulatecreate from './datasets-populate-create.js';
import deletedelete from './delete-delete.js';
import graphqlcreategraphql from './graphql-create-graph-ql.js';
import graphqlcreategraphqlv2 from './graphql-create-graph-qlv2.js';
import indicatortypesget from './indicator-types-get.js';
import indicatorsget from './indicators-get.js';
import queriescreate from './queries-create.js';
import queriescreatecreate from './queries-create-create.js';
import queriesdelete from './queries-delete.js';
import queriesgetevent from './queries-get-event.js';
import queriesgetv2 from './queries-get-v2.js';
import queriespatch from './queries-patch.js';
import rawcreate from './raw-create.js';
import relatecreatecreate from './relate-create-create.js';
import relationshipscreatecreate from './relationships-create-create.js';
import relationshipsget from './relationships-get.js';
import revertdocreate from './revert-do-create.js';
import tagscategoriescreatecreate from './tags-categories-create-create.js';
import tagscategoriesdelete from './tags-categories-delete.js';
import tagscategoriesget from './tags-categories-get.js';
import tagscategoriespatch from './tags-categories-patch.js';
import tagsdelete from './tags-delete.js';
import tagsget from './tags-get.js';
import tagspatch from './tags-patch.js';
import targetindustriescatalogget from './target-industries-catalog-get.js';
import updatebulkpatch from './update-bulk-patch.js';

const command: CommandModule = {
  command: 'events',
  describe: 'Events operations',

  builder: (yargs) => {
    return yargs
      .command(aggregateget)
      .command(categoriescatalogget)
      .command(categoriescreate)
      .command(create)
      .command(createbulkrelationshipscreate)
      .command(datasetcopycreate)
      .command(datasetcreate)
      .command(datasetdelete)
      .command(dataseteventsget)
      .command(datasetgroupscreate)
      .command(datasetgroupsdelete)
      .command(datasetgroupsgetgroup)
      .command(datasetgroupsgetv2)
      .command(datasetgroupsmemberscreate)
      .command(datasetgroupsmembersdelete)
      .command(datasetgroupsmembersget)
      .command(datasetgroupsupdate)
      .command(datasetindicatortypescreatecreate)
      .command(datasetindicatorsbulkcreate)
      .command(datasetindicatorscreatecreate)
      .command(datasetindicatorsdelete)
      .command(datasetindicatorsgetindicator)
      .command(datasetindicatorsgetindicatorlegacy)
      .command(datasetindicatorspatch)
      .command(datasetindicatorstagsget)
      .command(datasetmovecreate)
      .command(datasetpermissionscreate)
      .command(datasetpermissionsdelete)
      .command(datasetpermissionsget)
      .command(datasetpermissionsupdate)
      .command(datasettagsindicatorsget)
      .command(datasettargetindustriesget)
      .command(datasetspopulatecreate)
      .command(deletedelete)
      .command(graphqlcreategraphql)
      .command(graphqlcreategraphqlv2)
      .command(indicatortypesget)
      .command(indicatorsget)
      .command(queriescreate)
      .command(queriescreatecreate)
      .command(queriesdelete)
      .command(queriesgetevent)
      .command(queriesgetv2)
      .command(queriespatch)
      .command(rawcreate)
      .command(relatecreatecreate)
      .command(relationshipscreatecreate)
      .command(relationshipsget)
      .command(revertdocreate)
      .command(tagscategoriescreatecreate)
      .command(tagscategoriesdelete)
      .command(tagscategoriesget)
      .command(tagscategoriespatch)
      .command(tagsdelete)
      .command(tagsget)
      .command(tagspatch)
      .command(targetindustriescatalogget)
      .command(updatebulkpatch)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
