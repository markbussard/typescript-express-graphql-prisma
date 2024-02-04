/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import {
  CuidResolver,
  DateTimeResolver,
  EmailAddressResolver,
  JSONResolver
} from 'graphql-scalars';

import { Bookmark } from './bookmark/resolvers/Bookmark';
import { createBookmark as Mutation_createBookmark } from './bookmark/resolvers/Mutation/createBookmark';
import { deleteBookmark as Mutation_deleteBookmark } from './bookmark/resolvers/Mutation/deleteBookmark';
import { bookmarks as Query_bookmarks } from './bookmark/resolvers/Query/bookmarks';
import { Comment } from './comment/resolvers/Comment';
import { createComment as Mutation_createComment } from './comment/resolvers/Mutation/createComment';
import { deleteComment as Mutation_deleteComment } from './comment/resolvers/Mutation/deleteComment';
import { updateComment as Mutation_updateComment } from './comment/resolvers/Mutation/updateComment';
import { Like } from './like/resolvers/Like';
import { createLike as Mutation_createLike } from './like/resolvers/Mutation/createLike';
import { deleteLike as Mutation_deleteLike } from './like/resolvers/Mutation/deleteLike';
import { likes as Query_likes } from './like/resolvers/Query/likes';
import { createPost as Mutation_createPost } from './post/resolvers/Mutation/createPost';
import { deletePost as Mutation_deletePost } from './post/resolvers/Mutation/deletePost';
import { updatePost as Mutation_updatePost } from './post/resolvers/Mutation/updatePost';
import { Post } from './post/resolvers/Post';
import { post as Query_post } from './post/resolvers/Query/post';
import { posts as Query_posts } from './post/resolvers/Query/posts';
import type { Resolvers } from './types.generated';
import { me as Query_me } from './user/resolvers/Query/me';
import { User } from './user/resolvers/User';

export const resolvers: Resolvers = {
  Query: {
    bookmarks: Query_bookmarks,
    likes: Query_likes,
    me: Query_me,
    post: Query_post,
    posts: Query_posts
  },
  Mutation: {
    createBookmark: Mutation_createBookmark,
    createComment: Mutation_createComment,
    createLike: Mutation_createLike,
    createPost: Mutation_createPost,
    deleteBookmark: Mutation_deleteBookmark,
    deleteComment: Mutation_deleteComment,
    deleteLike: Mutation_deleteLike,
    deletePost: Mutation_deletePost,
    updateComment: Mutation_updateComment,
    updatePost: Mutation_updatePost
  },

  Bookmark: Bookmark,
  Comment: Comment,
  Like: Like,
  Post: Post,
  User: User,
  Cuid: CuidResolver,
  DateTime: DateTimeResolver,
  EmailAddress: EmailAddressResolver,
  JSON: JSONResolver
};
