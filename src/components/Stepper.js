import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MaterialStepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

const styles = theme => ({
  root: {},
})

const Stepper = props => (
  <MaterialStepper
    className={props.classes.root}
    activeStep={props.activeStep}
    alternativeLabel
  >
    {props.steps.map(label => {
      return (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      )
    })}
  </MaterialStepper>
)

Stepper.propTypes = {
  activeStep: PropTypes.number,
  steps: PropTypes.arrayOf(PropTypes.string),
}

export default withStyles(styles)(Stepper)
