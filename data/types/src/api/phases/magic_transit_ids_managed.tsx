import { Actions, RulesetPhase } from './fields';
import { RulesetPhaseType } from './utils';

export type AccountMagicIdsRuleset = RulesetPhaseType<
  RulesetPhase.MagicIDS,
  {},
  Actions.Execute
>;
