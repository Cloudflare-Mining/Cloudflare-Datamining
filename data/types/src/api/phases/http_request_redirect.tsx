import { AccountEntrypointType, RulesetPhaseType } from './utils';
import { RulesetPhase } from './fields';
import { ElementType } from '..';

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
