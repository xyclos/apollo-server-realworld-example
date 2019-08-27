import { gql } from 'apollo-server'

export default gql`

"""
Mutations for User, Profile and Article
"""
type Mutation {
  ### User and Profile
  createUser(input: CreateUserInput!): UserPayload
  login(input: LoginInput!): UserPayload
  updateUser(changes: UpdateUserInput!): UserPayload
  followUser(username: String!): ProfilePayload
  unfollowUser(username: String!): ProfilePayload

  ### Article
  createArticle(input: CreateArticleInput!): ArticlePayload
  updateArticle(slug: String!, changes: UpdateArticleInput!): ArticlePayload
  favoriteArticle(slug: String!): ArticlePayload
  deleteArticle(slug: String!): DeletionStatus

  ### Comment
  addComment(slug: String!, body: String!): CommentPayload
  deleteComment(id: ID!): CommentPayload
}`