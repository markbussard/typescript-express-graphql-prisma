import { isAuthenticated } from '~/graphql/authorizers';
import { type MutationResolvers } from '~/graphql/modules/types.generated';

export const updateComment: NonNullable<
  MutationResolvers['updateComment']
> = async (_parent, args, ctx) => {
  isAuthenticated(ctx);

  const userId = ctx.user!.id;

  const updatedComment = await ctx.db.comment.update({
    where: {
      id: args.id,
      authorId: userId
    },
    data: {
      ...args.input
    },
    include: {
      post: {
        include: {
          author: true
        }
      },
      author: true
    }
  });

  return updatedComment;
};
