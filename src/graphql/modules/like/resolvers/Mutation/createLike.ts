import { isAuthenticated } from '~/graphql/authorizers';
import { type MutationResolvers } from '~/graphql/modules/types.generated';

export const createLike: NonNullable<MutationResolvers['createLike']> = async (
  _parent,
  args,
  ctx
) => {
  isAuthenticated(ctx);

  const userId = ctx.user!.id;

  const newLike = await ctx.db.like.create({
    data: {
      userId,
      postId: args.input.postId
    },
    include: {
      user: true
    }
  });

  return newLike;
};
