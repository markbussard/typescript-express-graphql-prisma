import { isAuthenticated } from '~/graphql/authorizers';
import { type MutationResolvers } from '~/graphql/modules/types.generated';

export const createComment: NonNullable<
  MutationResolvers['createComment']
> = async (_parent, args, ctx) => {
  isAuthenticated(ctx);

  const userId = ctx.user!.id;

  const newComment = await ctx.db.comment.create({
    data: {
      ...args.input,
      authorId: userId
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

  return newComment;
};
