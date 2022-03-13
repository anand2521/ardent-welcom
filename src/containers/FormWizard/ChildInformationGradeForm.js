import React, { Component } from 'react'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import { formValues } from 'redux-form'
import { Field, reduxForm } from 'redux-form'
import { View } from 'react-native-web'
import { FormTitle, Headline, TextRadioBoxes } from '../../components'

import CourseIcon from '../../images/icons/desktop/icons8-course-80.png'

import ValidateFormFields from './ValidateFormFields'

const grades = {
  'A (100-90)': { value: 'A', title: 'A\n(100-90)' },
  'B (89-80)': { value: 'B', title: 'B\n(89-80)' },
  'C (79>)': { value: 'C', title: 'C\n(79>)' },
}

const styles = theme => ({
  headline: {
    'text-align': 'center',
  },
})

class ChildInformationGradeForm extends Component {
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
              'Finally, answer some supplementary questions about your child’s school performance. This will help us determine the best course for your child.\n\n What is your child’s current ' +
              primaryInterest +
              'grade in school?'
            }
          />
        </Hidden>
        <Hidden smUp>
          <Headline className={classes.headline}>
            What is your child’s current {fieldPrimaryInterest} grade in school?
          </Headline>
        </Hidden>

        <Field
          name="courseGrade"
          component={TextRadioBoxes}
          options={grades}
          icon={false}
          containedTitle={true}
          wrap={false}
          variant="outlined"
          column={true}
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
)(ChildInformationGradeForm)
