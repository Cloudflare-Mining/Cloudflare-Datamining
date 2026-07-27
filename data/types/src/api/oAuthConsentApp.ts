import { eg, type TypeFromCodec } from '@cloudflare/util-en-garde';

const OAuthGrantScope = eg.object({
  name: eg.string,
  description: eg.string,
  category: eg.string.optional
});

const ConsentAccount = eg.object({
  id: eg.string,
  name: eg.string
});

const OAuthConsentApp = eg.object({
  client_id: eg.string,
  client_name: eg.string,
  client_description: eg.string,
  client_type: eg.string,
  client_uri: eg.string,
  logo_uri: eg.string,
  handled_at: eg.string,
  grant_scopes: eg.record(eg.string, OAuthGrantScope).optional,
  // Accounts this consent grants access to that the user can still access.
  // Account resolution is best-effort. When both `accounts` and `all_accounts`
  // are absent, resolution failed or was skipped. An empty `accounts` with
  // `all_accounts` false means the user lost access to every granted account.
  // An empty `accounts` with `all_accounts` true is a wildcard covering all
  // accounts. A non-empty `accounts` lists the resolved accounts.
  accounts: eg.array(ConsentAccount).optional,
  all_accounts: eg.boolean.optional
});

export type ConsentAccount = TypeFromCodec<typeof ConsentAccount>;
export type OAuthConsentApp = TypeFromCodec<typeof OAuthConsentApp>;
