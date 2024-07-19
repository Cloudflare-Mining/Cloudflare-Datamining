import { Overwrite } from '../../utils';

import {
  Actions,
  SensitivityLevels,
  RulesetPhase,
  RulesetKind
} from './fields';

export type RulesetBase<PhaseType = RulesetPhase, KindType = RulesetKind> = {
  id: string;
  name: string;
  description: string;
  source: string;
  kind: KindType;
  version: string;
  last_updated: Date | string;
  phase: PhaseType;
};

export type RuleBase<
  ActionParametersType = { id: string },
  ActionType = Actions
> = {
  id: string;
  version: string;
  action: ActionType;
  expression: string;
  description: string;
  last_updated: string | Date;
  ref: string;
  enabled: boolean;
  action_parameters: ActionParametersType;
  logging?: { enabled: boolean };
  index: number;
  position?: { after?: string; before?: string; index?: number };
};

export type RulesetPhaseType<
  PhaseType = RulesetPhase,
  ActionParametersType = {},
  ActionType = Actions,
  KindType = RulesetKind,
  RuleType = RuleBase<ActionParametersType, ActionType>
> = RulesetBase<PhaseType, KindType> & {
  rules: RuleType[];
};

export type OverrideTypeRule = {
  id: string;
  enabled: true;
  action: Actions;
  score_threshold?: number;
  sensitivity_level: SensitivityLevels;
};

export type CategoryOverride = {
  action?: Actions;
  category?: string;
  enabled?: boolean;
  sensitivity_level?: SensitivityLevels;
};

export type OverrideType = {
  action: Actions;
  enabled: boolean;
  categories: CategoryOverride[];
  rules: OverrideTypeRule[];
  sensitivity_level: SensitivityLevels;
};

export type ActionParameterOverride = {
  id: string;
  ruleset: string;
  rulesets: string[];
  rules?: {
    [key: string]: string[];
  };
  matched_data?: { public_key?: string };
  overrides?: Partial<OverrideType>;
};

export type EntrypointOverrideActionParameters = {
  id: string;
  version: string;
  matched_data?: { public_key?: string };
  overrides?: OverrideType;
} & ActionParameterOverride;

export type AccountEntrypointType<
  PhaseType = RulesetPhase,
  ActionParameterType = EntrypointOverrideActionParameters,
  ActionType = Actions,
  RuleType = RuleBase<ActionParameterType, ActionType>
> = Overwrite<
  RulesetPhaseType<
    PhaseType,
    ActionParameterType,
    ActionType,
    RulesetKind.Root,
    RuleType
  >,
  { id: string }
>;

export type EntrypointRuleType = RuleBase<EntrypointOverrideActionParameters>;
