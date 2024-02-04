import { isAuthenticated } from '~/graphql/authorizers';
import { type MutationResolvers } from '~/graphql/modules/types.generated';

export const deleteComment: NonNullable<
  MutationResolvers['deleteComment']
> = async (_parent, args, ctx) => {
  isAuthenticated(ctx);

  const userId = ctx.user!.id;

  const deletedComment = await ctx.db.comment.delete({
    where: {
      id: args.id,
      authorId: userId
    },
    select: {
      id: true
    }
  });

  return deletedComment.id;
};
