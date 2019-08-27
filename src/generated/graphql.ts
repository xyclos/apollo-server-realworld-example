export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** Represents a single tag */
  Tag: any,
  /** RFC 3339 Date */
  Date: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


/** Represents a single article */
export type Article = {
  __typename?: 'Article',
  author: Profile,
  body: Scalars['String'],
  comments?: Maybe<CommentsConnection>,
  createdAt: Scalars['String'],
  description: Scalars['String'],
  favorited: Scalars['Boolean'],
  favoritesCount: Scalars['Int'],
  slug: Scalars['String'],
  tagList?: Maybe<Array<Maybe<Scalars['Tag']>>>,
  title: Scalars['String'],
  updatedAt: Scalars['String'],
};


/** Represents a single article */
export type ArticleCommentsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>
};

/** Used for paging through articles */
export type ArticleEdge = {
  __typename?: 'ArticleEdge',
  cursor: Scalars['String'],
  node?: Maybe<Article>,
};

export type ArticlePayload = {
  __typename?: 'ArticlePayload',
  article?: Maybe<Article>,
};

/** Wrapper for article edges, used for paging through articles */
export type ArticlesConnection = {
  __typename?: 'ArticlesConnection',
  count: Scalars['Int'],
  edges?: Maybe<Array<Maybe<ArticleEdge>>>,
  pageInfo: PageInfo,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

/** Represents a single comment */
export type Comment = {
  __typename?: 'Comment',
  author: Profile,
  article: Article,
  body: Scalars['String'],
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type CommentEdge = {
  __typename?: 'CommentEdge',
  cursor: Scalars['String'],
  node?: Maybe<Comment>,
};

export type CommentPayload = {
  __typename?: 'CommentPayload',
  comment?: Maybe<Comment>,
};

export type CommentsConnection = {
  __typename?: 'CommentsConnection',
  count: Scalars['Int'],
  edges?: Maybe<Array<Maybe<CommentEdge>>>,
  pageInfo: PageInfo,
};

export type CreateArticleInput = {
  body: Scalars['String'],
  description: Scalars['String'],
  tagList?: Maybe<Array<Maybe<Scalars['Tag']>>>,
  title: Scalars['String'],
};

/** the input for creating a user */
export type CreateUserInput = {
  email: Scalars['String'],
  username: Scalars['String'],
  password: Scalars['String'],
};


export type DeletionStatus = {
  __typename?: 'DeletionStatus',
  success: Scalars['Boolean'],
};

export type LoginInput = {
  email: Scalars['String'],
  password: Scalars['String'],
};

/** Mutations for User, Profile and Article */
export type Mutation = {
  __typename?: 'Mutation',
  createUser?: Maybe<UserPayload>,
  login?: Maybe<UserPayload>,
  updateUser?: Maybe<UserPayload>,
  followUser?: Maybe<ProfilePayload>,
  unfollowUser?: Maybe<ProfilePayload>,
  createArticle?: Maybe<ArticlePayload>,
  updateArticle?: Maybe<ArticlePayload>,
  favoriteArticle?: Maybe<ArticlePayload>,
  deleteArticle?: Maybe<DeletionStatus>,
  addComment?: Maybe<CommentPayload>,
  deleteComment?: Maybe<CommentPayload>,
};


/** Mutations for User, Profile and Article */
export type MutationCreateUserArgs = {
  input: CreateUserInput
};


/** Mutations for User, Profile and Article */
export type MutationLoginArgs = {
  input: LoginInput
};


/** Mutations for User, Profile and Article */
export type MutationUpdateUserArgs = {
  changes: UpdateUserInput
};


/** Mutations for User, Profile and Article */
export type MutationFollowUserArgs = {
  username: Scalars['String']
};


/** Mutations for User, Profile and Article */
export type MutationUnfollowUserArgs = {
  username: Scalars['String']
};


/** Mutations for User, Profile and Article */
export type MutationCreateArticleArgs = {
  input: CreateArticleInput
};


/** Mutations for User, Profile and Article */
export type MutationUpdateArticleArgs = {
  slug: Scalars['String'],
  changes: UpdateArticleInput
};


/** Mutations for User, Profile and Article */
export type MutationFavoriteArticleArgs = {
  slug: Scalars['String']
};


/** Mutations for User, Profile and Article */
export type MutationDeleteArticleArgs = {
  slug: Scalars['String']
};


/** Mutations for User, Profile and Article */
export type MutationAddCommentArgs = {
  slug: Scalars['String'],
  body: Scalars['String']
};


/** Mutations for User, Profile and Article */
export type MutationDeleteCommentArgs = {
  id: Scalars['ID']
};

export type PageInfo = {
  __typename?: 'PageInfo',
  endCursor?: Maybe<Scalars['String']>,
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
};

/** Represents a user profile */
export type Profile = {
  __typename?: 'Profile',
  username: Scalars['String'],
  bio?: Maybe<Scalars['String']>,
  following: Scalars['Boolean'],
  image?: Maybe<Scalars['String']>,
  articles?: Maybe<ArticlesConnection>,
  comments?: Maybe<CommentsConnection>,
  favorites?: Maybe<ArticlesConnection>,
  feed?: Maybe<ArticlesConnection>,
};


/** Represents a user profile */
export type ProfileArticlesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>
};


/** Represents a user profile */
export type ProfileCommentsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>
};


/** Represents a user profile */
export type ProfileFavoritesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>
};


/** Represents a user profile */
export type ProfileFeedArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>
};

export type ProfilePayload = {
  __typename?: 'ProfilePayload',
  profile?: Maybe<Profile>,
};

/** Queries */
export type Query = {
  __typename?: 'Query',
  article?: Maybe<Article>,
  articles?: Maybe<ArticlesConnection>,
  me?: Maybe<User>,
  feed?: Maybe<ArticlesConnection>,
  profile?: Maybe<ProfilePayload>,
  tags?: Maybe<Array<Maybe<Scalars['Tag']>>>,
};


/** Queries */
export type QueryArticleArgs = {
  slug: Scalars['String']
};


/** Queries */
export type QueryArticlesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  authoredBy?: Maybe<Scalars['String']>,
  favoritedBy?: Maybe<Scalars['String']>,
  withTag?: Maybe<Scalars['Tag']>
};


/** Queries */
export type QueryFeedArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>
};


/** Queries */
export type QueryProfileArgs = {
  username: Scalars['String']
};


export type UpdateArticleInput = {
  body?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};

/** The input for updatable fields on a user */
export type UpdateUserInput = {
  email?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  bio?: Maybe<Scalars['String']>,
};


/** Represents the User object (used for authentication) */
export type User = {
  __typename?: 'User',
  email: Scalars['String'],
  profile: Profile,
  token: Scalars['String'],
  username: Scalars['String'],
};

/** The payload for creating/updating a user */
export type UserPayload = {
  __typename?: 'UserPayload',
  user?: Maybe<User>,
};
