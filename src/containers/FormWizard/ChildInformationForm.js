import React from 'react'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import withWidth from '@material-ui/core/withWidth'
import { Field, reduxForm } from 'redux-form'
import { View } from 'react-native-web'

import {
  FormTitle,
  FormInput,
  PickerFormField,
  RadioFormField,
  BirthdayInput,
} from '../../components'
import { date } from 'redux-form-validators'
import ValidateFormFields from './ValidateFormFields'

import ChildrenIcon from '../../images/icons/desktop/icons8-children-80.png'

const styles = theme => ({
  formFields: {
    margin: theme.spacing.unit,
  },
})

const grades = {
  'K-1': 1,
  '2nd': 2,
  '3rd': 3,
  '4th': 4,
  '5th': 5,
  '6th': 6,
  '7th': 7,
  '8th': 8,
  '9th': 9,
  '10th': 10,
  '11th': 11,
  '12th': 12,
}

const genders = {
  Male: 'male',
  Female: 'female',
}

const ChildrenInformationForm = props => (
  <View>
    <Hidden xsDown>
      <FormTitle
        title={'Child Information'}
        icon={ChildrenIcon}
        description={
          'This informtation will help us determine which courses are best suited for your child.'
        }
      />
    </Hidden>

    <Field
      className={props.classes.formFields}
      name="firstNameChild"
      component={FormInput}
      placeholder="First Name"
    />

    <Field
      className={props.classes.formFields}
      name="lastNameChild"
      component={FormInput}
      placeholder="Last Name"
    />

    <Field
      className={props.classes.formFields}
      name="preferredName"
      component={FormInput}
      placeholder="Preferred Name"
    />

    <Field
      className={props.classes.formFields}
      name="gender"
      label="Gender"
      component={RadioFormField}
      options={genders}
    />

    <Field
      className={props.classes.formFields}
      name="birthday"
      component={BirthdayInput}
      label="Birthday"
      validate={date({
        if: values => {
          return values.birthday
        },
        format: 'mmddyyyy',
        msg: 'Invalid date',
        '<=': 'today',
        '>=': new Date(1900, 0, 1),
      })}
    />

    <Field
      className={props.classes.formFields}
      name="grade"
      component={PickerFormField}
      placeholder="Grade"
      values={grades}
    />

    <Field
      className={props.classes.formFields}
      name="school"
      type="text"
      component={FormInput}
      placeholder="School"
    />
  </View>
)

export default compose(
  withStyles(styles),
  withWidth(),
  reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: ValidateFormFields,
  })
)(ChildrenInformationForm)
