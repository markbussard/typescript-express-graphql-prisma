/* eslint-disable */
import type {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from 'graphql';

import type { ContextValue } from '../context';

export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Cuid: { input: string; output: string };
  DateTime: { input: Date | string; output: Date | string };
  EmailAddress: { input: string; output: string };
  JSON: { input: any; output: any };
};

export type Bookmark = {
  __typename?: 'Bookmark';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Cuid']['output'];
  post: Post;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Cuid']['output'];
  post: Post;
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateBookmarkInput = {
  postId: Scalars['Cuid']['input'];
  userId: Scalars['Cuid']['input'];
};

export type CreateCommentInput = {
  content: Scalars['String']['input'];
  postId: Scalars['Cuid']['input'];
};

export type CreateLikeInput = {
  postId: Scalars['Cuid']['input'];
};

export type CreatePostInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Like = {
  __typename?: 'Like';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Cuid']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBookmark: Bookmark;
  createComment: Comment;
  createLike: Like;
  createPost: Post;
  deleteBookmark: Scalars['Cuid']['output'];
  deleteComment: Scalars['Cuid']['output'];
  deleteLike: Scalars['Cuid']['output'];
  deletePost: Scalars['Cuid']['output'];
  updateComment: Comment;
  updatePost: Post;
};

export type MutationcreateBookmarkArgs = {
  input: CreateBookmarkInput;
};

export type MutationcreateCommentArgs = {
  input: CreateCommentInput;
};

export type MutationcreateLikeArgs = {
  input: CreateLikeInput;
};

export type MutationcreatePostArgs = {
  input: CreatePostInput;
};

export type MutationdeleteBookmarkArgs = {
  id: Scalars['Cuid']['input'];
};

export type MutationdeleteCommentArgs = {
  id: Scalars['Cuid']['input'];
};

export type MutationdeleteLikeArgs = {
  id: Scalars['Cuid']['input'];
};

export type MutationdeletePostArgs = {
  id: Scalars['Cuid']['input'];
};

export type MutationupdateCommentArgs = {
  id: Scalars['Cuid']['input'];
  input: UpdateCommentInput;
};

export type MutationupdatePostArgs = {
  id: Scalars['Cuid']['input'];
  input: UpdatePostInput;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  comments?: Maybe<Array<Comment>>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Cuid']['output'];
  likes?: Maybe<Array<Like>>;
  likesCount?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  bookmarks?: Maybe<Array<Bookmark>>;
  likes?: Maybe<Array<Like>>;
  me?: Maybe<User>;
  post: Post;
  posts?: Maybe<Array<Post>>;
};

export type QuerypostArgs = {
  id: Scalars['Cuid']['input'];
};

export type QuerypostsArgs = {
  page: Scalars['Int']['input'];
};

export type UpdateCommentInput = {
  content: Scalars['String']['input'];
};

export type UpdatePostInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  id: Scalars['Cuid']['output'];
  name: Scalars['String']['output'];
  role: UserRole;
  updatedAt: Scalars['DateTime']['output'];
};

export const UserRole = {
  ADMIN: 'ADMIN',
  USER: 'USER'
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Bookmark: ResolverTypeWrapper<Bookmark>;
  Comment: ResolverTypeWrapper<Comment>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  CreateBookmarkInput: CreateBookmarkInput;
  CreateCommentInput: CreateCommentInput;
  CreateLikeInput: CreateLikeInput;
  CreatePostInput: CreatePostInput;
  Cuid: ResolverTypeWrapper<Scalars['Cuid']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  Like: ResolverTypeWrapper<Like>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Query: ResolverTypeWrapper<{}>;
  UpdateCommentInput: UpdateCommentInput;
  UpdatePostInput: UpdatePostInput;
  User: ResolverTypeWrapper<User>;
  UserRole: UserRole;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Bookmark: Bookmark;
  Comment: Comment;
  String: Scalars['String']['output'];
  CreateBookmarkInput: CreateBookmarkInput;
  CreateCommentInput: CreateCommentInput;
  CreateLikeInput: CreateLikeInput;
  CreatePostInput: CreatePostInput;
  Cuid: Scalars['Cuid']['output'];
  DateTime: Scalars['DateTime']['output'];
  EmailAddress: Scalars['EmailAddress']['output'];
  JSON: Scalars['JSON']['output'];
  Like: Like;
  Mutation: {};
  Post: Post;
  Int: Scalars['Int']['output'];
  Query: {};
  UpdateCommentInput: UpdateCommentInput;
  UpdatePostInput: UpdatePostInput;
  User: User;
  Boolean: Scalars['Boolean']['output'];
}>;

export type BookmarkResolvers<
  ContextType = ContextValue,
  ParentType extends
    ResolversParentTypes['Bookmark'] = ResolversParentTypes['Bookmark']
> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['Cuid'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentResolvers<
  ContextType = ContextValue,
  ParentType extends
    ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']
> = ResolversObject<{
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['Cuid'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface CuidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Cuid'], any> {
  name: 'Cuid';
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface EmailAddressScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export interface JSONScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LikeResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']
> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['Cuid'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = ContextValue,
  ParentType extends
    ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  createBookmark?: Resolver<
    ResolversTypes['Bookmark'],
    ParentType,
    ContextType,
    RequireFields<MutationcreateBookmarkArgs, 'input'>
  >;
  createComment?: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    RequireFields<MutationcreateCommentArgs, 'input'>
  >;
  createLike?: Resolver<
    ResolversTypes['Like'],
    ParentType,
    ContextType,
    RequireFields<MutationcreateLikeArgs, 'input'>
  >;
  createPost?: Resolver<
    ResolversTypes['Post'],
    ParentType,
    ContextType,
    RequireFields<MutationcreatePostArgs, 'input'>
  >;
  deleteBookmark?: Resolver<
    ResolversTypes['Cuid'],
    ParentType,
    ContextType,
    RequireFields<MutationdeleteBookmarkArgs, 'id'>
  >;
  deleteComment?: Resolver<
    ResolversTypes['Cuid'],
    ParentType,
    ContextType,
    RequireFields<MutationdeleteCommentArgs, 'id'>
  >;
  deleteLike?: Resolver<
    ResolversTypes['Cuid'],
    ParentType,
    ContextType,
    RequireFields<MutationdeleteLikeArgs, 'id'>
  >;
  deletePost?: Resolver<
    ResolversTypes['Cuid'],
    ParentType,
    ContextType,
    RequireFields<MutationdeletePostArgs, 'id'>
  >;
  updateComment?: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    RequireFields<MutationupdateCommentArgs, 'id' | 'input'>
  >;
  updatePost?: Resolver<
    ResolversTypes['Post'],
    ParentType,
    ContextType,
    RequireFields<MutationupdatePostArgs, 'id' | 'input'>
  >;
}>;

export type PostResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']
> = ResolversObject<{
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  comments?: Resolver<
    Maybe<Array<ResolversTypes['Comment']>>,
    ParentType,
    ContextType
  >;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['Cuid'], ParentType, ContextType>;
  likes?: Resolver<
    Maybe<Array<ResolversTypes['Like']>>,
    ParentType,
    ContextType
  >;
  likesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = ContextValue,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  bookmarks?: Resolver<
    Maybe<Array<ResolversTypes['Bookmark']>>,
    ParentType,
    ContextType
  >;
  likes?: Resolver<
    Maybe<Array<ResolversTypes['Like']>>,
    ParentType,
    ContextType
  >;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  post?: Resolver<
    ResolversTypes['Post'],
    ParentType,
    ContextType,
    RequireFields<QuerypostArgs, 'id'>
  >;
  posts?: Resolver<
    Maybe<Array<ResolversTypes['Post']>>,
    ParentType,
    ContextType,
    RequireFields<QuerypostsArgs, 'page'>
  >;
}>;

export type UserResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Cuid'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ContextValue> = ResolversObject<{
  Bookmark?: BookmarkResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  Cuid?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  EmailAddress?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  Like?: LikeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;
