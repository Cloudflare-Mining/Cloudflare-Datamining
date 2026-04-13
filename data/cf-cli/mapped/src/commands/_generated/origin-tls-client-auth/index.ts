/**
 * origin-tls-client-auth command
 * @generated from apis/origin-tls-client-auth/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import hostnamecertificates from './hostname-certificates/index.js';
import hostnames from './hostnames/index.js';
import hostnamesextra from './hostnames-extra/index.js';
import settings from './settings/index.js';
import zonecertificates from './zone-certificates/index.js';

const command: CommandModule = {
  command: 'origin-tls-client-auth',
  describe:
    'Authenticated Origin Pulls — require Cloudflare to present a client certificate when connecting to your origin',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(get)
      .command(list)
      .command(hostnamecertificates)
      .command(hostnames)
      .command(hostnamesextra)
      .command(settings)
      .command(zonecertificates)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
