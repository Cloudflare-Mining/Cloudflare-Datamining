import {
  AccountEntrypointType,
  CategoryOverride,
  RuleBase,
  RulesetPhaseType
} from './utils';
import { Actions, SensitivityLevels, RulesetPhase } from './fields';
import { ElementType } from '..';

export type DDoSL4ActionParameters = {
  sensitivity_level: SensitivityLevels;
  categories: CategoryOverride[];
  rules: { id: string; action: Actions };
};

export type DDoSl4Rule = RuleBase<DDoSL4ActionParameters>;
export type DDoSl4Ruleset = RulesetPhaseType<
  RulesetPhase.L4DDoS,
  DDoSL4ActionParameters
>;

export type DDoSl4Entrypoint = AccountEntrypointType<
  RulesetPhase.L4DDoS,
  { overrides: CategoryOverride }
>;
export type DDoSEntrypointRule = ElementType<DDoSl4Entrypoint['rules']>;
