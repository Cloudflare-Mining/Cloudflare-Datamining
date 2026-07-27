import type { RulesetKind, RulesetPhase } from './fields';

import type {
  ManagedExecuteRule,
  ManagedSkipRule
} from './http_request_firewall_managed';
import type { AccountEntrypointType, RulesetBase } from './utils';
import type { ElementType } from '..';

export type MagicManagedExecuteRuleset = RulesetBase<
  RulesetPhase.MagicManaged,
  RulesetKind.Managed
> & {
  rules?: ManagedExecuteRule[];
};
export type MagicManagedSkipRuleset = RulesetBase<
  RulesetPhase.MagicManaged,
  RulesetKind.Managed
> & {
  rules?: ManagedSkipRule[];
};

export type MagicManagedRuleset =
  | MagicManagedExecuteRuleset
  | MagicManagedSkipRuleset;

export type MagicManagedRule = ElementType<MagicManagedRuleset['rules']>;

export type MagicManagedEntrypoint = AccountEntrypointType<
  RulesetPhase.MagicManaged,
  MagicManagedRule['action_parameters']
>;

export type MagicManagedEntrypointRule = ElementType<
  MagicManagedEntrypoint['rules']
>;
