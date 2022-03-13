import { Component } from 'react'
import { withApollo } from 'react-apollo'
import swal from 'sweetalert'

class Verification extends Component {
  async checkConfirmation() {
    const { client, checkQuery, id, token } = this.props
    const { data, error } = await client.query({
      query: checkQuery,
      variables: { id },
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      fetchPolicy: "no-cache"
    })

    if (error || data.length === 0) {
      return {
        error: true,
      }
    }

    return {
      error: false,
      data,
    }
  }

  async componentDidMount() {
    const {
      redirect,
      selectData,
      confirmQuery,
      alreadyVerified,
      verified,
      client,
      token,
      id,
    } = this.props
    const { error, data } = await this.checkConfirmation()
    if (error) {
      swal('Oops!', 'Something went wrong!', 'error').then(() =>
        window.location.replace(redirect)
      )
      return
    }

    const confirmed = selectData(data)

    if (confirmed) {
      swal('Confirmed!', `${alreadyVerified(data)}`, 'success').then(() =>
        window.location.replace(redirect)
      )
      return
    }

    await client.mutate({
      mutation: confirmQuery,
      variables: { id },
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      fetchPolicy: "no-cache"
    })
    swal('Confirmed!', `${verified(data)}`, 'success').then(() =>
      window.location.replace(redirect)
    )
    return
  }

  render() {
    return null
  }
}

export default withApollo(Verification)
