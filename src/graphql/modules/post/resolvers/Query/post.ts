import { type QueryResolvers } from '~/graphql/modules/types.generated';

export const post: NonNullable<QueryResolvers['post']> = async (
  _parent,
  args,
  ctx
) => {
  const post = await ctx.db.post.findUnique({
    where: {
      id: args.id
    },
    include: {
      author: true
    }
  });

  if (!post) {
    throw new Error('Post not found');
  }

  return post;
};
