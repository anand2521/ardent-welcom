import React, { Component } from 'react'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import { Field, reduxForm } from 'redux-form'
import { View } from 'react-native-web'
import { FormTitle, Headline, IconRadioBoxes } from '../../components'

import Mathematics from '../../images/icons/math-100.png'
import Coding from '../../images/icons/source-code-52.png'
import Science from '../../images/icons/test-tube-64.png'
import BiologyChemistry from '../../images/icons/biotech-100.png'
import Physics from '../../images/icons/physics-100.png'
import Writing from '../../images/icons/hand-with-pen-64.png'
import SpeechDebate from '../../images/icons/podium-filled-100.png'
import TestPrep from '../../images/icons/test-passed-100.png'

import CourseIcon from '../../images/icons/desktop/icons8-course-80.png'

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

class ChildInformationSecondaryInterestForm extends Component {
  render() {
    const { classes } = this.props
    return (
      <View>
        <Hidden xsDown>
          <FormTitle
            title={'Secondary Interests'}
            icon={CourseIcon}
            description={
              'Select any other topics that interest your child. This will help us determine what supplementary activities or events your child would be interested in.'
            }
          />
        </Hidden>
        <Hidden smUp>
          <Headline className={classes.headline}>
            Select other topics your child is interested in
          </Headline>
        </Hidden>

        <Field
          name="secondaryInterests"
          options={interests}
          primaryInterest={this.props.primaryInterest}
          component={IconRadioBoxes}
          radio={false}
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
  reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: ValidateFormFields,
  })
)(ChildInformationSecondaryInterestForm)
