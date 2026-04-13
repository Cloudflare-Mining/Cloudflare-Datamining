/**
 * settings command group
 * @generated from apis/email-security/schema.ts
 */
import type { CommandModule } from 'yargs';
import allowpoliciescreate from './allow-policies-create.js';
import allowpoliciesdelete from './allow-policies-delete.js';
import allowpoliciesedit from './allow-policies-edit.js';
import allowpoliciesget from './allow-policies-get.js';
import allowpolicieslist from './allow-policies-list.js';
import blocksenderscreate from './block-senders-create.js';
import blocksendersdelete from './block-senders-delete.js';
import blocksendersedit from './block-senders-edit.js';
import blocksendersget from './block-senders-get.js';
import blocksenderslist from './block-senders-list.js';
import domainsbulkdelete from './domains-bulk-delete.js';
import domainsdelete from './domains-delete.js';
import domainsedit from './domains-edit.js';
import domainsget from './domains-get.js';
import domainslist from './domains-list.js';
import impersonationregistrycreate from './impersonation-registry-create.js';
import impersonationregistrydelete from './impersonation-registry-delete.js';
import impersonationregistryedit from './impersonation-registry-edit.js';
import impersonationregistryget from './impersonation-registry-get.js';
import impersonationregistrylist from './impersonation-registry-list.js';
import trusteddomainscreate from './trusted-domains-create.js';
import trusteddomainsdelete from './trusted-domains-delete.js';
import trusteddomainsedit from './trusted-domains-edit.js';
import trusteddomainsget from './trusted-domains-get.js';
import trusteddomainslist from './trusted-domains-list.js';

const command: CommandModule = {
  command: 'settings',
  describe: 'Email security policies — allow lists, blocked senders, trusted domains, and impersonation registry',

  builder: (yargs) => {
    return yargs
      .command(allowpoliciescreate)
      .command(allowpoliciesdelete)
      .command(allowpoliciesedit)
      .command(allowpoliciesget)
      .command(allowpolicieslist)
      .command(blocksenderscreate)
      .command(blocksendersdelete)
      .command(blocksendersedit)
      .command(blocksendersget)
      .command(blocksenderslist)
      .command(domainsbulkdelete)
      .command(domainsdelete)
      .command(domainsedit)
      .command(domainsget)
      .command(domainslist)
      .command(impersonationregistrycreate)
      .command(impersonationregistrydelete)
      .command(impersonationregistryedit)
      .command(impersonationregistryget)
      .command(impersonationregistrylist)
      .command(trusteddomainscreate)
      .command(trusteddomainsdelete)
      .command(trusteddomainsedit)
      .command(trusteddomainsget)
      .command(trusteddomainslist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
