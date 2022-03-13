import React, { Component } from 'react'
import { compose } from 'redux'
import { formValues } from 'redux-form'
import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import { Field, reduxForm } from 'redux-form'
import { View } from 'react-native-web'
import { FormTitle, Headline, TextRadioBoxes } from '../../components'

import CourseIcon from '../../images/icons/desktop/icons8-course-80.png'

import ValidateFormFields from './ValidateFormFields'

const grades = {
  'Very Challenged': { value: 'very', title: 'Very Challenged' },
  'Moderately Challenged': {
    value: 'moderate',
    title: 'Moderately Challenged',
  },
  'Not Challenged at all': { value: 'low', title: 'Not Challenged at all' },
}

const styles = theme => ({
  headline: {
    'text-align': 'center',
  },
})

class ChildInformationChallengedForm extends Component {
  render() {
    const { classes, primaryInterest: fieldPrimaryInterest } = this.props
    const primaryInterest = fieldPrimaryInterest
      ? fieldPrimaryInterest + ' '
      : ''
    return (
      <View>
        <Hidden xsDown>
          <FormTitle
            title={'Supplementary Questions'}
            icon={CourseIcon}
            description={
              "Finally, answer some supplementary questions about your child’s school performance. This will help us determine the best course for your child.\n\n Is your child challenged by his/her school's current " +
              primaryInterest +
              'class?'
            }
          />
        </Hidden>
        <Hidden smUp>
          <Headline className={classes.headline}>
            Is your child challenged by his/her school's current{' '}
            {fieldPrimaryInterest} class?
          </Headline>
        </Hidden>

        <Field
          name="courseChallenge"
          component={TextRadioBoxes}
          options={grades}
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
  }),
  formValues('primaryInterest')
)(ChildInformationChallengedForm)
