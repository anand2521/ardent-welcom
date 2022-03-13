import React from 'react'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import Hidden from '@material-ui/core/Hidden'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

import ArrowBackIOS from '@material-ui/icons/ArrowBackIos'
import ArdentLogo from '../images/ardent-logo-white-text.svg'

const styles = theme => ({
  toolBar: {
    display: 'flex',
    'text-align': 'center',
  },
  iconButton: {
    color: 'white',
    position: 'absolute',
  },
  logo: {
    width: '100%',
    maxWidth: 200,
    height: 'auto',
  },
  header: {
    color: 'white',
    flex: 1,
    'text-align': 'center',
  },
})

const Header = props => (
  <AppBar position="static">
    <Toolbar className={props.classes.toolBar}>
      <Hidden smUp>
        {props.showBack && (
          <IconButton
            className={props.classes.iconButton}
            onClick={props.onBack}
          >
            <ArrowBackIOS />
          </IconButton>
        )}
        <Typography className={props.classes.header} variant="headline">
          {props.title}
        </Typography>
      </Hidden>
      <Hidden xsDown>
        <img
          className={props.classes.logo}
          src={ArdentLogo}
          alt="Ardent logo"
        />
      </Hidden>
    </Toolbar>
  </AppBar>
)

export default compose(
  withStyles(styles),
  withWidth()
)(Header)
