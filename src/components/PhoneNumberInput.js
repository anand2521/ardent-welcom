import React from 'react'
import MaskedInput from 'react-text-mask'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { View, Text } from 'react-native-web'
import { FormLabel } from '@material-ui/core'
import { red } from '@material-ui/core/colors'

const styles = theme => ({
  errorText: {
    color: theme.palette.error.main,
  },
  required: {
    '&:after': {
      content: '*',
      color: red,
    },
  },
})

const PhoneMask = props => {
  const { inputRef, ...other } = props

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={'\u2000'}
      showMask
    />
  )
}

const stripNonalphbetical = phoneNumber => {
  return phoneNumber.replace(/\D/g, '')
}

const PhoneNumberInput = props => {
  const { touched, error } = props.meta
  const { value, onChange } = props.input
  const { classes, className, label } = props

  return (
    <View className={className}>
      <FormLabel required={classes.required}>{label}</FormLabel>

      <TextField
        value={value}
        onChange={onChange}
        InputProps={{
          inputComponent: PhoneMask,
          value: value,
          onChange: event => {
            let phoneNumber = stripNonalphbetical(event.target.value)
            onChange(phoneNumber)
          },
        }}
      />
      {touched && (error && <Text className={classes.errorText}>{error}</Text>)}
    </View>
  )
}

export default withStyles(styles)(PhoneNumberInput)
