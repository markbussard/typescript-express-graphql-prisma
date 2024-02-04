import { isAuthenticated } from '~/graphql/authorizers';
import { type MutationResolvers } from '~/graphql/modules/types.generated';

export const createBookmark: NonNullable<
  MutationResolvers['createBookmark']
> = async (_parent, args, ctx) => {
  isAuthenticated(ctx);

  const userId = ctx.user!.id;

  const newBookmark = await ctx.db.bookmark.create({
    data: {
      userId,
      postId: args.input.postId
    },
    include: {
      post: {
        include: {
          author: true
        }
      },
      user: true
    }
  });

  return newBookmark;
};
