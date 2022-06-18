import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const ClientPublicKeyCredential = eg.object({
  id: eg.string,
  type: eg.string,
  rawId: eg.string,
  response: eg.object({
    clientDataJSON: eg.string,
    attestationObject: eg.string
  })
});

export const passwordValidateBody = eg.object({
  password: eg.string
});

export const NameSecurityKeyBody = eg.object({
  custom_name: eg.string
});

export type ClientPublicKeyCredential = TypeFromCodec<
  typeof ClientPublicKeyCredential
>;

export type passwordValidateBody = TypeFromCodec<typeof passwordValidateBody>;

export type NameSecurityKeyBody = TypeFromCodec<typeof NameSecurityKeyBody>;

export type TwoFactorSecurityKeys = string;
