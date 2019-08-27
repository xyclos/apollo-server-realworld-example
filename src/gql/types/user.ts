import { gql } from 'apollo-server'

export default gql`
"""
Represents the User object (used for authentication)
"""
type User {
  email: String!
  profile: Profile!
  token: String!
  username: String!
}

"""
The payload for creating/updating a user
"""
type UserPayload {
  user: User
}

"""
The input for updatable fields on a user
"""
input UpdateUserInput {
  email: String
  username: String
  password: String
  image: String
  bio: String
}

"""
the input for creating a user
"""
input CreateUserInput {
  email: String!
  username: String!
  password: String!
}

input LoginInput {
  email: String!
  password: String!
}
`
