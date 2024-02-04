import { isAuthenticated } from '~/graphql/authorizers';
import { type MutationResolvers } from '~/graphql/modules/types.generated';

export const updatePost: NonNullable<MutationResolvers['updatePost']> = async (
  _parent,
  args,
  ctx
) => {
  isAuthenticated(ctx);

  const userId = ctx.user!.id;

  const updatedPost = await ctx.db.post.update({
    where: {
      id: args.id,
      authorId: userId
    },
    data: {
      ...args.input
    },
    include: {
      author: true
    }
  });

  return updatedPost;
};
