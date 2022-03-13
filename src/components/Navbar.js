import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { View, Linking } from 'react-native-web'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import ArdentLogo from '../images/ardent-logo-white-text.svg'

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: '100%',
    maxWidth: 200,
    height: 'auto',
  },
  button: {
    flexShrink: 0,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    textTransform: 'none',
    color: 'white',
  },
})

const Navbar = props => {
  const { classes } = props

  return (
    <AppBar className={classes.root} position="absolute">
      <Toolbar>
        <View className={classes.logoContainer}>
          <img className={classes.logo} src={ArdentLogo} alt="Ardent logo" />
        </View>

        <Button
          className={classes.button}
          onClick={() => Linking.openURL('http://www.ardentacademy.com/')}
        >
          Home
        </Button>
        <Button
          className={classes.button}
          onClick={() => Linking.openURL('http://elearning.ardentacademy.com/')}
        >
          Catalog
        </Button>
        <Button
          className={classes.button}
          onClick={() =>
            Linking.openURL('http://www.ardentacademy.com/index.php/enrollment')
          }
        >
          Registration
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Navbar)
