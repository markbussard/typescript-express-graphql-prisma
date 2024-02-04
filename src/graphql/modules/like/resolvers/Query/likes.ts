import { isAuthenticated } from '~/graphql/authorizers';
import { type QueryResolvers } from '~/graphql/modules/types.generated';

export const likes: NonNullable<QueryResolvers['likes']> = async (
  _parent,
  _args,
  ctx
) => {
  isAuthenticated(ctx);

  const userId = ctx.user!.id;

  const likes = await ctx.db.like.findMany({
    where: {
      userId
    },
    include: {
      user: true
    }
  });

  return likes;
};
