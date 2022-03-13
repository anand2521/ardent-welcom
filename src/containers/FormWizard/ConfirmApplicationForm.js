import React, { Component } from 'react'
import { compose } from 'redux'
//Potential use to reset form values while still in formwizard component
// import {reset} from 'redux-form'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Button from '../../components/Button'
import { reduxForm } from 'redux-form'
import { View, Text, Linking } from 'react-native-web'

import CheckIcon from '../../images/icons/checkmark-512.png'

const styles = theme => ({
  root: {
    alignItems: 'center',
  },
  headline: {
    textAlign: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  iconContainer: {
    'align-items': 'center',
  },
  checkCircle: {
    width: '140px',
    height: 'auto',
  },
  button: {
    width: '100%',
  },
  buttonLink: {
    width: '100%',
    fontWeight: 'bold',
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 2,
  },
})

class ConfirmApplicationForm extends Component {
  render() {
    const { classes } = this.props
    return (
      <View className={classes.root}>
        <View className={classes.iconContainer}>
          <img className={classes.checkCircle} src={CheckIcon} alt="" />
        </View>

        <Text className={classes.centerText}>
          Your application is complete. An Ardent educational consultant will
          contact you shortly.{'\n'}
          {'\n'}
          If you don’t hear from us, you can call or email us at:{'\n'}
          {'\n'}
        </Text>
        <Text>
          <strong>Phone:</strong> +1 (949) 861-2111{'\n'}
          <strong>Email:</strong> Info@ArdentAcademy.com
        </Text>

        <Button
          className={classes.buttonLink}
          variant="outlined"
          color="primary"
          onClick={() => {
            Linking.openURL('http://www.ardentacademy.com/')
          }}
        >
          Back to ArdentAcademy.com
        </Button>
        <Button
          className={classes.button}
          color="primary"
          onClick={() => {
            this.props.history.push('/')
          }}
        >
          Schedule another child
        </Button>
      </View>
    )
  }
}

export default compose(
  withRouter,
  withStyles(styles),
  reduxForm({
    form: 'wizard',
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true,
  })
)(ConfirmApplicationForm)
