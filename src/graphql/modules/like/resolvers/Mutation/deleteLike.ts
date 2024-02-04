import { isAuthenticated } from '~/graphql/authorizers';
import { type MutationResolvers } from '~/graphql/modules/types.generated';

export const deleteLike: NonNullable<MutationResolvers['deleteLike']> = async (
  _parent,
  args,
  ctx
) => {
  isAuthenticated(ctx);

  const userId = ctx.user!.id;

  const deletedLike = await ctx.db.like.delete({
    where: {
      id: args.id,
      userId
    },
    select: {
      id: true
    }
  });

  return deletedLike.id;
};
