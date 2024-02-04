import { isAuthenticated } from '~/graphql/authorizers';
import { type MutationResolvers } from '~/graphql/modules/types.generated';

export const deleteBookmark: NonNullable<
  MutationResolvers['deleteBookmark']
> = async (_parent, args, ctx) => {
  isAuthenticated(ctx);

  const userId = ctx.user!.id;

  const deletedBookmark = await ctx.db.bookmark.delete({
    where: {
      id: args.id,
      userId
    },
    select: {
      id: true
    }
  });

  return deletedBookmark.id;
};
