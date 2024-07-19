import { RulesetPhase } from './fields';
import { RuleBase, RulesetBase } from './utils';
import { OverrideRule } from './override';
import { Overwrite } from '../../utils';

export type ManagedExecuteRule = OverrideRule;

export type ManagedExecuteRuleset =
  RulesetBase<RulesetPhase.HttpRequestFirewallManaged> & {
    rules?: ManagedExecuteRule[];
  };

export type ActionParameterSkip = {
  id: string;
  rules?: {
    [key: string]: string[];
  };
  ruleset?: string;
  rulesets?: string[];
};

export type ManagedSkipRule = RuleBase<ActionParameterSkip> & {
  logging: { enabled: boolean };
  categories: string[];
};

export type ManagedSkipRuleset =
  RulesetBase<RulesetPhase.HttpRequestFirewallManaged> & {
    rules?: ManagedSkipRule[];
  };

export type ManagedRuleset = ManagedExecuteRuleset | ManagedSkipRuleset;

export type ManagedRule = Overwrite<
  ManagedSkipRule | ManagedExecuteRule,
  { id: string }
>;
