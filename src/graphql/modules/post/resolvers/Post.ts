import type { PostResolvers } from './../../types.generated';

export const Post: PostResolvers = {
  likes: async (parent, _args, ctx) => {
    const likes = await ctx.db.like.findMany({
      where: {
        postId: parent.id
      },
      include: {
        user: true
      }
    });
    return likes;
  },
  likesCount: async (parent, _args, ctx) => {
    const likesCount = await ctx.db.like.count({
      where: {
        postId: parent.id
      }
    });
    return likesCount;
  },
  author: async (parent, _args, ctx) => {
    const author = await ctx.db.user.findUnique({
      where: {
        id: parent.author.id
      }
    });

    if (!author) {
      throw new Error('Author not found');
    }

    return author;
  },
  comments: async (parent, _args, ctx) => {
    const comments = await ctx.db.comment.findMany({
      where: {
        postId: parent.id
      },
      include: {
        author: true,
        post: {
          include: {
            author: true
          }
        }
      }
    });
    return comments;
  }
};
