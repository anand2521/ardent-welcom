import gql from 'graphql-tag'

export const queryFamilyMember = gql`
  query familyMember($id: ID!) {
    familyMember(id: $id) {
      id
      firstName
      confirmedEmail
    }
  }
`

export const queryTrial = gql`
  query trial($id: ID!) {
    trial(id: $id) {
      id
      confirmed
    }
  }
`

export const queryMakeup = gql`
  query makeup($id: ID!) {
    makeup(id: $id) {
      id
      confirmed
    }
  }
`
