import { gql } from 'apollo-server'

export default gql`
"""
Represents a single article
"""
type Article {
  author: Profile!
  body: String!
  comments(first: Int, after: String): CommentsConnection
  createdAt: String!
  description: String!
  favorited: Boolean!
  favoritesCount: Int!
  slug: String!
  tagList: [Tag],
  title: String!
  updatedAt: String!
}

"""
Used for paging through articles
"""
type ArticleEdge {
  cursor: String!
  node: Article
}

"""
Wrapper for article edges, used for paging through articles
"""
type ArticlesConnection {
  count: Int!
  edges: [ArticleEdge]
  pageInfo: PageInfo!
}

input UpdateArticleInput {
  body: String
  description: String
  title: String
}

input CreateArticleInput {
  body: String!
  description: String!
  tagList: [Tag]
  title: String!
}

type ArticlePayload {
  article: Article
}
`
