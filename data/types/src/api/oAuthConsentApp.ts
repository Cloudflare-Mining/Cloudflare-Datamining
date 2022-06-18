import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

const OAuthConsentApp = eg.object({
  client_id: eg.string,
  client_name: eg.string,
  client_description: eg.string,
  client_type: eg.string,
  client_uri: eg.string,
  logo_uri: eg.string,
  handled_at: eg.string
});

export type OAuthConsentApp = TypeFromCodec<typeof OAuthConsentApp>;
