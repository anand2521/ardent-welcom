import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import CheckIcon from '@material-ui/icons/Check'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing.unit * 2,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    marginBottom: theme.spacing.unit,
  },
  text: {
    color: 'white',
    marginBottom: theme.spacing.unit,
  },
  button: {
    color: 'white',
    textTransform: 'none',

    padding: 0,
  },
})

const ToolTipBox = props => {
  const { classes, onClose } = props

  return (
    <Paper className={classes.root}>
      <Typography className={classes.title} variant="subheading">
        Tell us what your child is interested in
      </Typography>
      <Typography className={classes.text}>
        To help our educational consultants, tell us what topic your child is
        interested in and we’ll select the best course path for your child
        tailored to their interests.
      </Typography>

      <Divider />
      <Button className={classes.button} variant="text" onClick={onClose}>
        <CheckIcon />
        Got it
      </Button>
    </Paper>
  )
}

export default withStyles(styles)(ToolTipBox)
