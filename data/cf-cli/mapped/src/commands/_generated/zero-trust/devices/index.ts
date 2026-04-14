/**
 * devices command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import clienttargetenvironmentslist from './client-target-environments-list.js';
import clientversionslist from './client-versions-list.js';
import deploymentgroupscreate from './deployment-groups-create.js';
import deploymentgroupsdelete from './deployment-groups-delete.js';
import deploymentgroupsget from './deployment-groups-get.js';
import deploymentgroupslist from './deployment-groups-list.js';
import deploymentgroupsupdate from './deployment-groups-update.js';
import devicesdelete from './devices-delete.js';
import devicesget from './devices-get.js';
import deviceslist from './devices-list.js';
import devicesrevoke from './devices-revoke.js';
import dextestscreate from './dex-tests-create.js';
import dextestsdelete from './dex-tests-delete.js';
import dextestsget from './dex-tests-get.js';
import dextestslist from './dex-tests-list.js';
import dextestsupdate from './dex-tests-update.js';
import fleetstatusget from './fleet-status-get.js';
import get from './get.js';
import ipprofilescreate from './ip-profiles-create.js';
import ipprofilesdelete from './ip-profiles-delete.js';
import ipprofilesget from './ip-profiles-get.js';
import ipprofileslist from './ip-profiles-list.js';
import ipprofilesupdate from './ip-profiles-update.js';
import list from './list.js';
import networkscreate from './networks-create.js';
import networksdelete from './networks-delete.js';
import networksget from './networks-get.js';
import networkslist from './networks-list.js';
import networksupdate from './networks-update.js';
import overridecodesget from './override-codes-get.js';
import overridecodeslist from './override-codes-list.js';
import policiescustomcreate from './policies-custom-create.js';
import policiescustomdelete from './policies-custom-delete.js';
import policiescustomedit from './policies-custom-edit.js';
import policiescustomexcludesget from './policies-custom-excludes-get.js';
import policiescustomexcludesupdate from './policies-custom-excludes-update.js';
import policiescustomfallbackdomainsget from './policies-custom-fallback-domains-get.js';
import policiescustomfallbackdomainsupdate from './policies-custom-fallback-domains-update.js';
import policiescustomget from './policies-custom-get.js';
import policiescustomincludesget from './policies-custom-includes-get.js';
import policiescustomincludesupdate from './policies-custom-includes-update.js';
import policiescustomlist from './policies-custom-list.js';
import policiesdefaultcertificatesedit from './policies-default-certificates-edit.js';
import policiesdefaultcertificatesget from './policies-default-certificates-get.js';
import policiesdefaultedit from './policies-default-edit.js';
import policiesdefaultexcludesget from './policies-default-excludes-get.js';
import policiesdefaultexcludesupdate from './policies-default-excludes-update.js';
import policiesdefaultfallbackdomainsget from './policies-default-fallback-domains-get.js';
import policiesdefaultfallbackdomainsupdate from './policies-default-fallback-domains-update.js';
import policiesdefaultget from './policies-default-get.js';
import policiesdefaultincludesget from './policies-default-includes-get.js';
import policiesdefaultincludesupdate from './policies-default-includes-update.js';
import posturecreate from './posture-create.js';
import posturedelete from './posture-delete.js';
import postureget from './posture-get.js';
import postureintegrationscreate from './posture-integrations-create.js';
import postureintegrationsdelete from './posture-integrations-delete.js';
import postureintegrationsedit from './posture-integrations-edit.js';
import postureintegrationsget from './posture-integrations-get.js';
import postureintegrationslist from './posture-integrations-list.js';
import posturelist from './posture-list.js';
import postureupdate from './posture-update.js';
import registrationsbulkdelete from './registrations-bulk-delete.js';
import registrationsdelete from './registrations-delete.js';
import registrationsget from './registrations-get.js';
import registrationslist from './registrations-list.js';
import registrationsrevoke from './registrations-revoke.js';
import registrationsunrevoke from './registrations-unrevoke.js';
import resilienceglobalwarpoverridecreate from './resilience-global-warp-override-create.js';
import resilienceglobalwarpoverrideget from './resilience-global-warp-override-get.js';
import revokecreate from './revoke-create.js';
import settingsdelete from './settings-delete.js';
import settingsedit from './settings-edit.js';
import settingsget from './settings-get.js';
import settingsupdate from './settings-update.js';
import unrevokecreate from './unrevoke-create.js';

const command: CommandModule = {
  command: 'devices',
  describe: 'Enrolled devices, WARP client profiles, posture checks, and device-level policies',

  builder: (yargs) => {
    return yargs
      .command(clienttargetenvironmentslist)
      .command(clientversionslist)
      .command(deploymentgroupscreate)
      .command(deploymentgroupsdelete)
      .command(deploymentgroupsget)
      .command(deploymentgroupslist)
      .command(deploymentgroupsupdate)
      .command(devicesdelete)
      .command(devicesget)
      .command(deviceslist)
      .command(devicesrevoke)
      .command(dextestscreate)
      .command(dextestsdelete)
      .command(dextestsget)
      .command(dextestslist)
      .command(dextestsupdate)
      .command(fleetstatusget)
      .command(get)
      .command(ipprofilescreate)
      .command(ipprofilesdelete)
      .command(ipprofilesget)
      .command(ipprofileslist)
      .command(ipprofilesupdate)
      .command(list)
      .command(networkscreate)
      .command(networksdelete)
      .command(networksget)
      .command(networkslist)
      .command(networksupdate)
      .command(overridecodesget)
      .command(overridecodeslist)
      .command(policiescustomcreate)
      .command(policiescustomdelete)
      .command(policiescustomedit)
      .command(policiescustomexcludesget)
      .command(policiescustomexcludesupdate)
      .command(policiescustomfallbackdomainsget)
      .command(policiescustomfallbackdomainsupdate)
      .command(policiescustomget)
      .command(policiescustomincludesget)
      .command(policiescustomincludesupdate)
      .command(policiescustomlist)
      .command(policiesdefaultcertificatesedit)
      .command(policiesdefaultcertificatesget)
      .command(policiesdefaultedit)
      .command(policiesdefaultexcludesget)
      .command(policiesdefaultexcludesupdate)
      .command(policiesdefaultfallbackdomainsget)
      .command(policiesdefaultfallbackdomainsupdate)
      .command(policiesdefaultget)
      .command(policiesdefaultincludesget)
      .command(policiesdefaultincludesupdate)
      .command(posturecreate)
      .command(posturedelete)
      .command(postureget)
      .command(postureintegrationscreate)
      .command(postureintegrationsdelete)
      .command(postureintegrationsedit)
      .command(postureintegrationsget)
      .command(postureintegrationslist)
      .command(posturelist)
      .command(postureupdate)
      .command(registrationsbulkdelete)
      .command(registrationsdelete)
      .command(registrationsget)
      .command(registrationslist)
      .command(registrationsrevoke)
      .command(registrationsunrevoke)
      .command(resilienceglobalwarpoverridecreate)
      .command(resilienceglobalwarpoverrideget)
      .command(revokecreate)
      .command(settingsdelete)
      .command(settingsedit)
      .command(settingsget)
      .command(settingsupdate)
      .command(unrevokecreate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
