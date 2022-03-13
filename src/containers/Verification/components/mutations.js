import gql from 'graphql-tag'

export const confirmFamilyMemberEmail = gql`
  mutation updateFamilyMember($id: ID!) {
    updateFamilyMember(id: $id, input: { confirmedEmail: true }) {
      id
    }
  }
`

export const confirmTrial = gql`
  mutation updateTrial($id: ID!) {
    updateTrial(id: $id, input: { confirmed: true }) {
      id
    }
  }
`

export const confirmMakeup = gql`
  mutation updateMakeup($id: ID!) {
    updateMakeup(id: $id, input: { confirmed: true }) {
      id
    }
  }
`
