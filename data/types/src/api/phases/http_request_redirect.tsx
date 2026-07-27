import type { AccountEntrypointType, RulesetPhaseType } from './utils';
import type { RulesetPhase } from './fields';
import type { ElementType } from '..';

export type RedirectActionParameters = {
  id: string;
  from_list: {
    key: string;
    name: string;
  };
};

export type EntrypointRedirectRuleset = AccountEntrypointType<
  RulesetPhase.HttpRequestRedirect,
  RedirectActionParameters
>;

export type AccountRedirectRuleset = RulesetPhaseType<
  RulesetPhase.HttpRequestRedirect,
  RedirectActionParameters
>;

export type RedirectRule = ElementType<AccountRedirectRuleset['rules']>;
