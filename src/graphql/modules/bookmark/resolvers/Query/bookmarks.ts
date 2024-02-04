import { isAuthenticated } from '~/graphql/authorizers';
import { type QueryResolvers } from '~/graphql/modules/types.generated';

export const bookmarks: NonNullable<QueryResolvers['bookmarks']> = async (
  _parent,
  _args,
  ctx
) => {
  isAuthenticated(ctx);

  const userId = ctx.user!.id;

  const bookmarks = await ctx.db.bookmark.findMany({
    where: {
      userId
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

  return bookmarks;
};
