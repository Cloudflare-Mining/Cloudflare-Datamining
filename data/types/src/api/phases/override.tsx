import { Overwrite, RequiredKeys } from '../../utils';
import { SensitivityLevels, RulesetPhase } from './fields';
import {
  AccountEntrypointType,
  ActionParameterOverride,
  RuleBase
} from './utils';

export type OverrideRule = RequiredKeys<
  RuleBase<ActionParameterOverride>,
  'id'
> & {
  index: number;
  categories: string[];
  category: string;
  allowed_override_actions?: string[];
  score_threshold?: number;
  sensitivity_level: SensitivityLevels;
};

export type RulesetOverride = Overwrite<
  AccountEntrypointType<RulesetPhase, OverrideRule>,
  { rules: OverrideRule[]; enabled?: boolean }
>;
