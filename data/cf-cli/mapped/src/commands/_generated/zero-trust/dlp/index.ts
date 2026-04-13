/**
 * dlp command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import datasetscreate from './datasets-create.js';
import datasetsdelete from './datasets-delete.js';
import datasetsget from './datasets-get.js';
import datasetslist from './datasets-list.js';
import datasetsupdate from './datasets-update.js';
import datasetsuploadcreate from './datasets-upload-create.js';
import datasetsuploadedit from './datasets-upload-edit.js';
import datasetsversionscreate from './datasets-versions-create.js';
import datasetsversionsentriescreate from './datasets-versions-entries-create.js';
import emailaccountmappingcreate from './email-account-mapping-create.js';
import emailaccountmappingget from './email-account-mapping-get.js';
import emailrulesbulkedit from './email-rules-bulk-edit.js';
import emailrulescreate from './email-rules-create.js';
import emailrulesdelete from './email-rules-delete.js';
import emailrulesget from './email-rules-get.js';
import emailruleslist from './email-rules-list.js';
import emailrulesupdate from './email-rules-update.js';
import entriescreate from './entries-create.js';
import entriescustomcreate from './entries-custom-create.js';
import entriescustomdelete from './entries-custom-delete.js';
import entriescustomget from './entries-custom-get.js';
import entriescustomlist from './entries-custom-list.js';
import entriescustomupdate from './entries-custom-update.js';
import entriesdelete from './entries-delete.js';
import entriesget from './entries-get.js';
import entriesintegrationcreate from './entries-integration-create.js';
import entriesintegrationdelete from './entries-integration-delete.js';
import entriesintegrationget from './entries-integration-get.js';
import entriesintegrationlist from './entries-integration-list.js';
import entriesintegrationupdate from './entries-integration-update.js';
import entrieslist from './entries-list.js';
import entriespredefinedcreate from './entries-predefined-create.js';
import entriespredefineddelete from './entries-predefined-delete.js';
import entriespredefinedget from './entries-predefined-get.js';
import entriespredefinedlist from './entries-predefined-list.js';
import entriespredefinedupdate from './entries-predefined-update.js';
import entriesupdate from './entries-update.js';
import limitslist from './limits-list.js';
import patternsvalidate from './patterns-validate.js';
import payloadlogsget from './payload-logs-get.js';
import payloadlogsupdate from './payload-logs-update.js';
import profilescustomcreate from './profiles-custom-create.js';
import profilescustomdelete from './profiles-custom-delete.js';
import profilescustomget from './profiles-custom-get.js';
import profilescustomupdate from './profiles-custom-update.js';
import profilesget from './profiles-get.js';
import profileslist from './profiles-list.js';
import profilespredefinedcreate from './profiles-predefined-create.js';
import profilespredefineddelete from './profiles-predefined-delete.js';
import profilespredefinedget from './profiles-predefined-get.js';
import profilespredefinedupdate from './profiles-predefined-update.js';

const command: CommandModule = {
  command: 'dlp',
  describe: 'Data Loss Prevention — detection profiles, custom patterns, datasets, and entry scanning rules',

  builder: (yargs) => {
    return yargs
      .command(datasetscreate)
      .command(datasetsdelete)
      .command(datasetsget)
      .command(datasetslist)
      .command(datasetsupdate)
      .command(datasetsuploadcreate)
      .command(datasetsuploadedit)
      .command(datasetsversionscreate)
      .command(datasetsversionsentriescreate)
      .command(emailaccountmappingcreate)
      .command(emailaccountmappingget)
      .command(emailrulesbulkedit)
      .command(emailrulescreate)
      .command(emailrulesdelete)
      .command(emailrulesget)
      .command(emailruleslist)
      .command(emailrulesupdate)
      .command(entriescreate)
      .command(entriescustomcreate)
      .command(entriescustomdelete)
      .command(entriescustomget)
      .command(entriescustomlist)
      .command(entriescustomupdate)
      .command(entriesdelete)
      .command(entriesget)
      .command(entriesintegrationcreate)
      .command(entriesintegrationdelete)
      .command(entriesintegrationget)
      .command(entriesintegrationlist)
      .command(entriesintegrationupdate)
      .command(entrieslist)
      .command(entriespredefinedcreate)
      .command(entriespredefineddelete)
      .command(entriespredefinedget)
      .command(entriespredefinedlist)
      .command(entriespredefinedupdate)
      .command(entriesupdate)
      .command(limitslist)
      .command(patternsvalidate)
      .command(payloadlogsget)
      .command(payloadlogsupdate)
      .command(profilescustomcreate)
      .command(profilescustomdelete)
      .command(profilescustomget)
      .command(profilescustomupdate)
      .command(profilesget)
      .command(profileslist)
      .command(profilespredefinedcreate)
      .command(profilespredefineddelete)
      .command(profilespredefinedget)
      .command(profilespredefinedupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
