import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native-web'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const ErrorText = styled(Text)`
  color: #eb5757;
`
const RequiredFields = (className, classes) => {
  if (className === 'preferredName') return
  return classes.required
}
const styles = themes => ({
  cssUnderline: {
    '&:after': {
      borderBottomColor: '#118ACC',
    },
  },
  cssLabel: {
    '&$cssFocused': {
      color: '#118ACC',
    },
  },
  cssFocused: {},
  required: {
    '&:after': {
      content: '*',
      color: red,
    },
  },
})

const FormInput = props => {
  const { touched, error } = props.meta
  const { value, onChange } = props.input
  const { classes, className } = props
  return (
    <View className={className}>
      <TextField
        value={value}
        onChange={onChange}
        placeholder={props.placeholder}
        InputProps={{ classes: { underline: classes.cssUnderline } }}
        InputLabelProps={{
          FormLabelClasses: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        label={props.placeholder}
        required={RequiredFields(props.input.name, classes)}
      />
      {touched && (error && <ErrorText>{error}</ErrorText>)}
    </View>
  )
}

FormInput.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FormInput)
