import React from 'react'
import { confirmMakeup } from './mutations'
import { queryMakeup } from './queries'
import Verification from './Verification'

const MakeupVerification = props => {
  const { id, redirect, token } = props
  return (
    <Verification
      checkQuery={queryMakeup}
      id={id}
      redirect={redirect}
      token={token}
      selectData={data => data.makeup.confirmed}
      confirmQuery={confirmMakeup}
      alreadyVerified={data => `The makeup has already been scheduled!`}
      verified={data => `The makeup is scheduled!`}
    />
  )
}

export default MakeupVerification
