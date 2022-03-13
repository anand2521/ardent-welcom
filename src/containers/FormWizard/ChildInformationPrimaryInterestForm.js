import React, { Component } from 'react'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import withWidth from '@material-ui/core/withWidth'
import { Field, reduxForm } from 'redux-form'
import { View } from 'react-native-web'
import {
  FormTitle,
  Headline,
  IconRadioBoxes,
  ToolTipBox,
} from '../../components'

import Mathematics from '../../images/icons/math-100.png'
import Coding from '../../images/icons/source-code-52.png'
import Science from '../../images/icons/test-tube-64.png'
import BiologyChemistry from '../../images/icons/biotech-100.png'
import Physics from '../../images/icons/physics-100.png'
import Writing from '../../images/icons/hand-with-pen-64.png'
import SpeechDebate from '../../images/icons/podium-filled-100.png'
import TestPrep from '../../images/icons/test-passed-100.png'

import SchoolIcon from '../../images/icons/desktop/icons8-school-80.png'

import ValidateFormFields from './ValidateFormFields'

const interests = {
  Math: { value: 'math', title: 'Math', icon: Mathematics },
  'Science (K-8)': { value: 'science', title: 'Science (K-8)', icon: Science },
  Coding: { value: 'coding', title: 'Coding', icon: Coding },
  Physics: { value: 'physics', title: 'Physics', icon: Physics },
  'Biology / Chemistry': {
    value: 'biology/chemistry',
    title: 'Biology / Chemistry',
    icon: BiologyChemistry,
  },
  Writing: { value: 'writing', title: 'Writing', icon: Writing },
  'Speech & Debate': {
    value: 'speech & debate',
    title: 'Speech & Debate',
    icon: SpeechDebate,
  },
  'Test Prep (SAT/ACT/AP)': {
    value: 'test prep',
    title: 'Test Prep (SAT/ACT/AP)',
    icon: TestPrep,
  },
}

const styles = theme => ({
  headline: {
    'text-align': 'center',
  },
})

class ChildInformationPrimaryInterestForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openToolTip: true,
    }

    this.handleCloseToolTip = this.handleCloseToolTip.bind(this)
  }

  handleCloseToolTip() {
    this.setState({ openToolTip: false })
  }

  render() {
    const { classes } = this.props
    const { openToolTip } = this.state

    return (
      <View>
        <Hidden xsDown>
          <FormTitle
            title={'Primary Interests'}
            icon={SchoolIcon}
            description={
              'Select the topic that interests your child the most. This will help us determine which course will be most engaging for your child.'
            }
          />
        </Hidden>
        <Hidden smUp>
          <Headline className={classes.headline}>
            Choose one main topic interest
          </Headline>
        </Hidden>

        {openToolTip && <ToolTipBox onClose={this.handleCloseToolTip} />}

        <Field
          name="primaryInterest"
          component={IconRadioBoxes}
          options={interests}
          radio={true}
          icon={true}
          containedTitle={false}
          wrap={true}
          variant="contained"
          column={false}
        />
      </View>
    )
  }
}

export default compose(
  withStyles(styles),
  withWidth(),
  reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: ValidateFormFields,
  })
)(ChildInformationPrimaryInterestForm)
