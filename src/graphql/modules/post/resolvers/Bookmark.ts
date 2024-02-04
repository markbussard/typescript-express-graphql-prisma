import type { BookmarkResolvers } from './../../types.generated';

export const Bookmark: Pick<BookmarkResolvers, 'post'> = {
  post: async (parent, _args, ctx) => {
    const post = await ctx.db.post.findUnique({
      where: {
        id: parent.post?.id
      },
      include: {
        author: true
      }
    });

    if (!post) {
      throw new Error('Post not found');
    }

    return post;
  }
};
