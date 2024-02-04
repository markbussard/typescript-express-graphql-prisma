import { isAuthenticated } from '~/graphql/authorizers';
import { type MutationResolvers } from '~/graphql/modules/types.generated';

export const createPost: NonNullable<MutationResolvers['createPost']> = async (
  _parent,
  args,
  ctx
) => {
  isAuthenticated(ctx);

  const userId = ctx.user!.id;

  const newPost = await ctx.db.post.create({
    data: {
      title: args.input.title,
      content: args.input.content,
      authorId: userId
    },
    include: {
      author: true
    }
  });

  return newPost;
};
