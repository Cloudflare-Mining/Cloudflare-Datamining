/**
 * access command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import aicontrolsmcpportalscreate from './ai-controls-mcp-portals-create.js';
import aicontrolsmcpportalsdelete from './ai-controls-mcp-portals-delete.js';
import aicontrolsmcpportalslist from './ai-controls-mcp-portals-list.js';
import aicontrolsmcpportalsread from './ai-controls-mcp-portals-read.js';
import aicontrolsmcpportalsupdate from './ai-controls-mcp-portals-update.js';
import aicontrolsmcpserverscreate from './ai-controls-mcp-servers-create.js';
import aicontrolsmcpserversdelete from './ai-controls-mcp-servers-delete.js';
import aicontrolsmcpserverslist from './ai-controls-mcp-servers-list.js';
import aicontrolsmcpserversread from './ai-controls-mcp-servers-read.js';
import aicontrolsmcpserverssync from './ai-controls-mcp-servers-sync.js';
import aicontrolsmcpserversupdate from './ai-controls-mcp-servers-update.js';
import applicationscascreate from './applications-cas-create.js';
import applicationscasdelete from './applications-cas-delete.js';
import applicationscasget from './applications-cas-get.js';
import applicationscaslist from './applications-cas-list.js';
import applicationscreate from './applications-create.js';
import applicationsdelete from './applications-delete.js';
import applicationsget from './applications-get.js';
import applicationslist from './applications-list.js';
import applicationspoliciescreate from './applications-policies-create.js';
import applicationspoliciesdelete from './applications-policies-delete.js';
import applicationspoliciesget from './applications-policies-get.js';
import applicationspolicieslist from './applications-policies-list.js';
import applicationspoliciesupdate from './applications-policies-update.js';
import applicationspolicytestscreate from './applications-policy-tests-create.js';
import applicationspolicytestsget from './applications-policy-tests-get.js';
import applicationspolicytestsuserslist from './applications-policy-tests-users-list.js';
import applicationsrevoketokens from './applications-revoke-tokens.js';
import applicationssettingsedit from './applications-settings-edit.js';
import applicationssettingsupdate from './applications-settings-update.js';
import applicationsupdate from './applications-update.js';
import applicationsuserpolicycheckslist from './applications-user-policy-checks-list.js';
import bookmarkscreate from './bookmarks-create.js';
import bookmarksdelete from './bookmarks-delete.js';
import bookmarksget from './bookmarks-get.js';
import bookmarkslist from './bookmarks-list.js';
import bookmarksupdate from './bookmarks-update.js';
import certificatescreate from './certificates-create.js';
import certificatesdelete from './certificates-delete.js';
import certificatesget from './certificates-get.js';
import certificateslist from './certificates-list.js';
import certificatessettingsget from './certificates-settings-get.js';
import certificatessettingsupdate from './certificates-settings-update.js';
import certificatesupdate from './certificates-update.js';
import custompagescreate from './custom-pages-create.js';
import custompagesdelete from './custom-pages-delete.js';
import custompagesget from './custom-pages-get.js';
import custompageslist from './custom-pages-list.js';
import custompagesupdate from './custom-pages-update.js';
import gatewaycacreate from './gateway-ca-create.js';
import gatewaycadelete from './gateway-ca-delete.js';
import gatewaycalist from './gateway-ca-list.js';
import groupscreate from './groups-create.js';
import groupsdelete from './groups-delete.js';
import groupsget from './groups-get.js';
import groupslist from './groups-list.js';
import groupsupdate from './groups-update.js';
import infrastructuretargetsbulkdelete from './infrastructure-targets-bulk-delete.js';
import infrastructuretargetsbulkdeletev2 from './infrastructure-targets-bulk-delete-v2.js';
import infrastructuretargetsbulkupdate from './infrastructure-targets-bulk-update.js';
import infrastructuretargetscreate from './infrastructure-targets-create.js';
import infrastructuretargetsdelete from './infrastructure-targets-delete.js';
import infrastructuretargetsget from './infrastructure-targets-get.js';
import infrastructuretargetslist from './infrastructure-targets-list.js';
import infrastructuretargetsupdate from './infrastructure-targets-update.js';
import keysget from './keys-get.js';
import keysrotate from './keys-rotate.js';
import keysupdate from './keys-update.js';
import logsaccessrequestslist from './logs-access-requests-list.js';
import logsscimupdateslist from './logs-scim-updates-list.js';
import policiescreate from './policies-create.js';
import policiesdelete from './policies-delete.js';
import policiesget from './policies-get.js';
import policieslist from './policies-list.js';
import policiesupdate from './policies-update.js';
import servicetokenscreate from './service-tokens-create.js';
import servicetokensdelete from './service-tokens-delete.js';
import servicetokensget from './service-tokens-get.js';
import servicetokenslist from './service-tokens-list.js';
import servicetokensrefresh from './service-tokens-refresh.js';
import servicetokensrotate from './service-tokens-rotate.js';
import servicetokensupdate from './service-tokens-update.js';
import tagscreate from './tags-create.js';
import tagsdelete from './tags-delete.js';
import tagsget from './tags-get.js';
import tagslist from './tags-list.js';
import tagsupdate from './tags-update.js';
import usersactivesessionsget from './users-active-sessions-get.js';
import usersactivesessionslist from './users-active-sessions-list.js';
import userscreate from './users-create.js';
import usersdelete from './users-delete.js';
import usersfailedloginslist from './users-failed-logins-list.js';
import usersget from './users-get.js';
import userslastseenidentityget from './users-last-seen-identity-get.js';
import userslist from './users-list.js';
import usersupdate from './users-update.js';

const command: CommandModule = {
  command: 'access',
  describe: 'Access applications, policies, certificates, service tokens, groups, bookmarks, tags, and custom pages',

  builder: (yargs) => {
    return yargs
      .command(aicontrolsmcpportalscreate)
      .command(aicontrolsmcpportalsdelete)
      .command(aicontrolsmcpportalslist)
      .command(aicontrolsmcpportalsread)
      .command(aicontrolsmcpportalsupdate)
      .command(aicontrolsmcpserverscreate)
      .command(aicontrolsmcpserversdelete)
      .command(aicontrolsmcpserverslist)
      .command(aicontrolsmcpserversread)
      .command(aicontrolsmcpserverssync)
      .command(aicontrolsmcpserversupdate)
      .command(applicationscascreate)
      .command(applicationscasdelete)
      .command(applicationscasget)
      .command(applicationscaslist)
      .command(applicationscreate)
      .command(applicationsdelete)
      .command(applicationsget)
      .command(applicationslist)
      .command(applicationspoliciescreate)
      .command(applicationspoliciesdelete)
      .command(applicationspoliciesget)
      .command(applicationspolicieslist)
      .command(applicationspoliciesupdate)
      .command(applicationspolicytestscreate)
      .command(applicationspolicytestsget)
      .command(applicationspolicytestsuserslist)
      .command(applicationsrevoketokens)
      .command(applicationssettingsedit)
      .command(applicationssettingsupdate)
      .command(applicationsupdate)
      .command(applicationsuserpolicycheckslist)
      .command(bookmarkscreate)
      .command(bookmarksdelete)
      .command(bookmarksget)
      .command(bookmarkslist)
      .command(bookmarksupdate)
      .command(certificatescreate)
      .command(certificatesdelete)
      .command(certificatesget)
      .command(certificateslist)
      .command(certificatessettingsget)
      .command(certificatessettingsupdate)
      .command(certificatesupdate)
      .command(custompagescreate)
      .command(custompagesdelete)
      .command(custompagesget)
      .command(custompageslist)
      .command(custompagesupdate)
      .command(gatewaycacreate)
      .command(gatewaycadelete)
      .command(gatewaycalist)
      .command(groupscreate)
      .command(groupsdelete)
      .command(groupsget)
      .command(groupslist)
      .command(groupsupdate)
      .command(infrastructuretargetsbulkdelete)
      .command(infrastructuretargetsbulkdeletev2)
      .command(infrastructuretargetsbulkupdate)
      .command(infrastructuretargetscreate)
      .command(infrastructuretargetsdelete)
      .command(infrastructuretargetsget)
      .command(infrastructuretargetslist)
      .command(infrastructuretargetsupdate)
      .command(keysget)
      .command(keysrotate)
      .command(keysupdate)
      .command(logsaccessrequestslist)
      .command(logsscimupdateslist)
      .command(policiescreate)
      .command(policiesdelete)
      .command(policiesget)
      .command(policieslist)
      .command(policiesupdate)
      .command(servicetokenscreate)
      .command(servicetokensdelete)
      .command(servicetokensget)
      .command(servicetokenslist)
      .command(servicetokensrefresh)
      .command(servicetokensrotate)
      .command(servicetokensupdate)
      .command(tagscreate)
      .command(tagsdelete)
      .command(tagsget)
      .command(tagslist)
      .command(tagsupdate)
      .command(usersactivesessionsget)
      .command(usersactivesessionslist)
      .command(userscreate)
      .command(usersdelete)
      .command(usersfailedloginslist)
      .command(usersget)
      .command(userslastseenidentityget)
      .command(userslist)
      .command(usersupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
