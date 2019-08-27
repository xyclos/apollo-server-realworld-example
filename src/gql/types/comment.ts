import { gql } from 'apollo-server'

export default gql`

"""
Represents a single comment
"""
type Comment {
  author: Profile!
  article: Article!
  body: String!
  createdAt: String!
  updatedAt: String!
}

type CommentEdge {
  cursor: String!
  node: Comment
}

type CommentsConnection {
  count: Int!
  edges: [CommentEdge]
  pageInfo: PageInfo!
}

type DeletionStatus {
  success: Boolean!
}

type PageInfo {
  endCursor: String
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
}

type CommentPayload {
  comment: Comment
}
`
