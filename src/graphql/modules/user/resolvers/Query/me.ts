import { type QueryResolvers } from '~/graphql/modules/types.generated';

export const me: NonNullable<QueryResolvers['me']> = async (
  _parent,
  _args,
  ctx
) => {
  return ctx.user;
};
