import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const ZendeskArticle = eg.object({
  link: eg.string,
  title: eg.string
});

export type ZendeskArticle = TypeFromCodec<typeof ZendeskArticle>;
