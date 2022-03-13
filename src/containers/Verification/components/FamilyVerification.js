import React from 'react'
import { confirmFamilyMemberEmail } from './mutations'
import { queryFamilyMember } from './queries'
import Verification from './Verification'

const FamilyVerification = props => {
  const { id, redirect, token } = props
  return (
    <Verification
      checkQuery={queryFamilyMember}
      id={id}
      redirect={redirect}
      token={token}
      selectData={data => data.familyMember.confirmedEmail}
      confirmQuery={confirmFamilyMemberEmail}
      alreadyVerified={data =>
        `Your email is already verified ${data.familyMember.firstName}!`
      }
      verified={data =>
        `Your email is now verified ${data.familyMember.firstName}!`
      }
    />
  )
}

export default FamilyVerification
