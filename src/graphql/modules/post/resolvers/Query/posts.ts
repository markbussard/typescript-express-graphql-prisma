import { type QueryResolvers } from '~/graphql/modules/types.generated';

export const posts: NonNullable<QueryResolvers['posts']> = async (
  _parent,
  args,
  ctx
) => {
  // Each "page" has 5 posts
  const skip = (args.page - 1) * 5;

  // Fetch posts based on the calculated skip value
  const posts = await ctx.db.post.findMany({
    take: 5, // Fetch 5 posts per request
    skip,
    orderBy: { createdAt: 'desc' },
    include: {
      author: true
    }
  });

  return posts;
};
