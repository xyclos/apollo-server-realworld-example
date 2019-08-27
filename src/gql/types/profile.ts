import { gql } from 'apollo-server'

export default gql`
"""
Represents a user profile
"""
type Profile {
  username: String!
  bio: String
  following: Boolean!
  image: String
  articles(first: Int, after: String): ArticlesConnection
  comments(first: Int, after: String): CommentsConnection
  favorites(first: Int, after: String): ArticlesConnection
  feed(first: Int, after: String): ArticlesConnection
}

type ProfilePayload {
  profile: Profile
}
`
