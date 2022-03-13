import React from 'react'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import { Field, reduxForm } from 'redux-form'
import { View } from 'react-native-web'

import ValidateFormFields from './ValidateFormFields'

import {
  FormTitle,
  FormInput,
  RadioFormField,
  PhoneNumberInput,
} from '../../components/'

import ContactsIcon from '../../images/icons/desktop/icons8-contacts.svg'

const styles = theme => ({
  root: {},
  subheading: {
    textAlign: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  buttonSpacer: {
    width: theme.spacing.unit * 4,
  },
  formFields: {
    margin: theme.spacing.unit,
  },
})

const relationships = {
  Mother: 'mother',
  Father: 'father',
  Guardian: 'guardian',
}

const ParentInformationForm = props => (
  <View className={props.classes.root}>
    <Hidden xsDown>
      <FormTitle
        title={'Parent Information'}
        icon={ContactsIcon}
        description={
          'Fill out the form below to get started. This information will help us decide which course is best suited for your child.'
        }
      />
    </Hidden>

    <Field
      className={props.classes.formFields}
      name="firstNameParent"
      type="text"
      component={FormInput}
      placeholder="First Name"
    />
    <Field
      className={props.classes.formFields}
      name="lastNameParent"
      type="text"
      component={FormInput}
      placeholder="Last Name"
    />
    <Field
      className={props.classes.formFields}
      name="email"
      type="email"
      component={FormInput}
      placeholder="Email"
    />
    <Field
      className={props.classes.formFields}
      name="relationship"
      label="Relationship to Child"
      component={RadioFormField}
      options={relationships}
    />
    <Field
      className={props.classes.formFields}
      name="phoneNumber"
      label="Phone Number"
      component={PhoneNumberInput}
    />
  </View>
)

export default compose(
  withStyles(styles),
  reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: ValidateFormFields,
  })
)(ParentInformationForm)
