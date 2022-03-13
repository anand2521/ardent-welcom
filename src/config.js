const { REACT_APP_API_HOST, REACT_APP_NODE_ENV } = process.env

export const debug = REACT_APP_NODE_ENV !== 'production'

export const apiUrl =
  REACT_APP_API_HOST ||
  (debug
    ? 'https://ardent-api-next.ardentlabs.io'
    : 'https://ardent-api.ardentlabs.io')

export const redirectLink = 'https://welcome-next.ardentlabs.io/'
