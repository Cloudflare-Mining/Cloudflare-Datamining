/**
 * attack-surface-report command group
 * @generated from apis/intel/schema.ts
 */
import type { CommandModule } from 'yargs';
import issuetypesget from './issue-types-get.js';
import issuesclass from './issues-class.js';
import issuesdismiss from './issues-dismiss.js';
import issueslist from './issues-list.js';
import issuesseverity from './issues-severity.js';
import issuestype from './issues-type.js';

const command: CommandModule = {
  command: 'attack-surface-report',
  describe: 'Attack surface intelligence — exposed assets, vulnerabilities, and infrastructure mapping',

  builder: (yargs) => {
    return yargs
      .command(issuetypesget)
      .command(issuesclass)
      .command(issuesdismiss)
      .command(issueslist)
      .command(issuesseverity)
      .command(issuestype)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
