import { isAuthenticated } from '~/graphql/authorizers';
import { type MutationResolvers } from '~/graphql/modules/types.generated';

export const deletePost: NonNullable<MutationResolvers['deletePost']> = async (
  _parent,
  args,
  ctx
) => {
  isAuthenticated(ctx);

  const userId = ctx.user!.id;

  const deletedPost = await ctx.db.post.delete({
    where: {
      id: args.id,
      authorId: userId
    },
    select: {
      id: true
    }
  });

  return deletedPost.id;
};
