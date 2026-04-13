/**
 * user command
 * @generated from apis/user/schema.ts
 */
import type { CommandModule } from 'yargs';
import edit from './edit.js';
import get from './get.js';
import auditlogs from './audit-logs/index.js';
import billing from './billing/index.js';
import firewall from './firewall/index.js';
import invites from './invites/index.js';
import loadbalancers from './load-balancers/index.js';
import loadbalancinganalytics from './load-balancing-analytics/index.js';
import organizations from './organizations/index.js';
import subscriptions from './subscriptions/index.js';
import tenants from './tenants/index.js';
import tokens from './tokens/index.js';

const command: CommandModule = {
  command: 'user',
  describe: 'Your Cloudflare user profile, invitations, organizations, billing, and personal API tokens',

  builder: (yargs) => {
    return yargs
      .command(edit)
      .command(get)
      .command(auditlogs)
      .command(billing)
      .command(firewall)
      .command(invites)
      .command(loadbalancers)
      .command(loadbalancinganalytics)
      .command(organizations)
      .command(subscriptions)
      .command(tenants)
      .command(tokens)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
