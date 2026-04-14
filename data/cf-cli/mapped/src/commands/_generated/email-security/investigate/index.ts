/**
 * investigate command group
 * @generated from apis/email-security/schema.ts
 */
import type { CommandModule } from 'yargs';
import detectionsget from './detections-get.js';
import get from './get.js';
import getactionlog from './get-action-log.js';
import list from './list.js';
import movebulk from './move-bulk.js';
import movecreate from './move-create.js';
import previewcreate from './preview-create.js';
import previewget from './preview-get.js';
import rawget from './raw-get.js';
import reclassifycreate from './reclassify-create.js';
import releasebulk from './release-bulk.js';
import traceget from './trace-get.js';

const command: CommandModule = {
  command: 'investigate',
  describe:
    'Search and investigate email messages — view detections, traces, raw content, and take remediation actions',

  builder: (yargs) => {
    return yargs
      .command(detectionsget)
      .command(get)
      .command(getactionlog)
      .command(list)
      .command(movebulk)
      .command(movecreate)
      .command(previewcreate)
      .command(previewget)
      .command(rawget)
      .command(reclassifycreate)
      .command(releasebulk)
      .command(traceget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
