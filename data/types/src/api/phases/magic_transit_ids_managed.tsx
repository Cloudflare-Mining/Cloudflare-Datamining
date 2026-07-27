import type { Actions, RulesetPhase } from './fields';
import type { RulesetPhaseType } from './utils';

export type AccountMagicIdsRuleset = RulesetPhaseType<
  RulesetPhase.MagicIDS,
  {},
  Actions.Execute
>;
