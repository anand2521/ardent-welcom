import React from 'react'
import {
  FamilyVerification,
  TrialVerification,
  MakeupVerification,
} from './components'
import Page404 from '../PageNotFound'
import { redirectLink } from '../../config'
import queryString from 'query-string'

const Verify = ({ match, location }) => {
  const { params } = match
  const { name } = params
  const { id, token } = queryString.parse(location.search)
  if (name === 'familyMember') {
    return <FamilyVerification id={id} token={token} redirect={redirectLink} />
  }
  if (name === 'trial') {
    return <TrialVerification id={id} token={token} redirect={redirectLink} />
  }
  if (name === 'makeup') {
    return <MakeupVerification id={id} token={token} redirect={redirectLink} />
  }
  return <Page404 />
}

export default Verify
