import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Text } from 'react-native-web'

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
})

const Footer = props => (
  <Text className={props.classes.root}>
    Need Assistance? Contact us at:{'\n'}
    <strong>Phone:</strong> 1 (949) 861-2111{'\n'}
    <strong>Email:</strong> Info@ArdentAcademy.com
  </Text>
)

export default withStyles(styles)(Footer)
