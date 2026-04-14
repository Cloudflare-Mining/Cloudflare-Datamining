/**
 * workers command
 * @generated from apis/workers/schema.ts
 */
import type { CommandModule } from 'yargs';
import listextra from './list-extra.js';
import accountsettings from './account-settings/index.js';
import assets from './assets/index.js';
import beta from './beta/index.js';
import configuration from './configuration/index.js';
import crawler from './crawler/index.js';
import dispatch from './dispatch/index.js';
import domains from './domains/index.js';
import observability from './observability/index.js';
import placement from './placement/index.js';
import publisher from './publisher/index.js';
import registries from './registries/index.js';
import routes from './routes/index.js';
import scripts from './scripts/index.js';
import scriptsextra from './scripts-extra/index.js';
import services from './services/index.js';
import subdomains from './subdomains/index.js';
import workflows from './workflows/index.js';
import zonescanbeenabled from './zones-can-be-enabled/index.js';

const command: CommandModule = {
  command: 'workers',
  describe: "Deploy and manage serverless JavaScript/WASM applications on Cloudflare's global network",

  builder: (yargs) => {
    return yargs
      .command(listextra)
      .command(accountsettings)
      .command(assets)
      .command(beta)
      .command(configuration)
      .command(crawler)
      .command(dispatch)
      .command(domains)
      .command(observability)
      .command(placement)
      .command(publisher)
      .command(registries)
      .command(routes)
      .command(scripts)
      .command(scriptsextra)
      .command(services)
      .command(subdomains)
      .command(workflows)
      .command(zonescanbeenabled)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
