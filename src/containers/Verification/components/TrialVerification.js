import React from 'react'
import { confirmTrial } from './mutations'
import { queryTrial } from './queries'
import Verification from './Verification'

const TrialVerification = props => {
  const { id, redirect, token } = props
  return (
    <Verification
      checkQuery={queryTrial}
      id={id}
      redirect={redirect}
      token={token}
      selectData={data => data.trial.confirmed}
      confirmQuery={confirmTrial}
      alreadyVerified={data => 'The trial has already been scheduled!'}
      verified={data => 'The trial is scheduled!'}
    />
  )
}

export default TrialVerification
