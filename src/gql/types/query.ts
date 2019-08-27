import { gql } from 'apollo-server'

export default gql`

"""
Queries
"""
type Query {
  article(slug: String!): Article
  articles(
    first: Int,
    after: String,
    authoredBy: String
    favoritedBy: String
    withTag: Tag
  ): ArticlesConnection
  me: User
  feed(first: Int, after: String): ArticlesConnection
  profile(username: String!): ProfilePayload
  tags: [Tag]
}
`