/**
 * rulesets command
 * @generated from apis/rulesets/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import createextra from './create-extra.js';
import delete_ from './delete.js';
import deleteextra from './delete-extra.js';
import get from './get.js';
import getextra from './get-extra.js';
import list from './list.js';
import listextra from './list-extra.js';
import update from './update.js';
import updateextra from './update-extra.js';
import phases from './phases/index.js';
import phasesextra from './phases-extra/index.js';
import rules from './rules/index.js';
import rulesextra from './rules-extra/index.js';
import versions from './versions/index.js';
import versionsextra from './versions-extra/index.js';

const command: CommandModule = {
  command: 'rulesets',
  describe:
    'Versioned collections of rules that control how Cloudflare processes traffic — WAF, transform, redirect, and more',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(createextra)
      .command(delete_)
      .command(deleteextra)
      .command(get)
      .command(getextra)
      .command(list)
      .command(listextra)
      .command(update)
      .command(updateextra)
      .command(phases)
      .command(phasesextra)
      .command(rules)
      .command(rulesextra)
      .command(versions)
      .command(versionsextra)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
