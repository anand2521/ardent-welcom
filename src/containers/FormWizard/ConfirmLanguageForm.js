import React, { Component } from 'react'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import withWidth from '@material-ui/core/withWidth'
import { Field, reduxForm } from 'redux-form'
import { View } from 'react-native-web'
import { FormTitle, Headline, TextRadioBoxes } from '../../components'

import CourseIcon from '../../images/icons/desktop/icons8-course-80.png'

import ValidateFormFields from './ValidateFormFields'

const languages = {
  English: { value: 'english', title: 'English' },
  Chinese: { value: 'chinese', title: 'Chinese (中文)' },
  Korean: { value: 'korean', title: 'Korean (한국인)' },
}

const styles = theme => ({
  headline: {
    'text-align': 'center',
  },
  button: {
    textTransform: 'none',
  },
})

class ConfirmLanguageForm extends Component {
  render() {
    const { classes } = this.props
    return (
      <View>
        <Hidden xsDown>
          <FormTitle
            title={'Supplementary Questions'}
            icon={CourseIcon}
            description={'What is your language preference?'}
          />
        </Hidden>
        <Hidden smUp>
          <Headline className={classes.headline}>
            What is your language preference?
          </Headline>
        </Hidden>

        <Field
          name="languagePreference"
          component={TextRadioBoxes}
          options={languages}
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
)(ConfirmLanguageForm)
