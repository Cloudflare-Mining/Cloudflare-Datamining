/**
 * threat-events command group
 * @generated from apis/cloudforce-one/schema.ts
 */
import type { CommandModule } from 'yargs';
import attackerslist from './attackers-list.js';
import bulkcreate from './bulk-create.js';
import categoriescreate from './categories-create.js';
import categoriesdelete from './categories-delete.js';
import categoriesedit from './categories-edit.js';
import categoriesget from './categories-get.js';
import categorieslist from './categories-list.js';
import countrieslist from './countries-list.js';
import create from './create.js';
import datasetscreate from './datasets-create.js';
import datasetsedit from './datasets-edit.js';
import datasetsget from './datasets-get.js';
import datasetslist from './datasets-list.js';
import datasetsraw from './datasets-raw.js';
import edit from './edit.js';
import eventtagscreate from './event-tags-create.js';
import eventtagsdelete from './event-tags-delete.js';
import get from './get.js';
import indicatortypeslist from './indicator-types-list.js';
import list from './list.js';
import rawedit from './raw-edit.js';
import rawget from './raw-get.js';
import relatedelete from './relate-delete.js';
import tagscreate from './tags-create.js';
import targetindustrieslist from './target-industries-list.js';

const command: CommandModule = {
  command: 'threat-events',
  describe: 'Threat event feed — structured intelligence on attacks, campaigns, and indicators of compromise',

  builder: (yargs) => {
    return yargs
      .command(attackerslist)
      .command(bulkcreate)
      .command(categoriescreate)
      .command(categoriesdelete)
      .command(categoriesedit)
      .command(categoriesget)
      .command(categorieslist)
      .command(countrieslist)
      .command(create)
      .command(datasetscreate)
      .command(datasetsedit)
      .command(datasetsget)
      .command(datasetslist)
      .command(datasetsraw)
      .command(edit)
      .command(eventtagscreate)
      .command(eventtagsdelete)
      .command(get)
      .command(indicatortypeslist)
      .command(list)
      .command(rawedit)
      .command(rawget)
      .command(relatedelete)
      .command(tagscreate)
      .command(targetindustrieslist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
