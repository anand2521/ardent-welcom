import React from 'react'
import { View, Text } from 'react-native-web'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import { red } from '@material-ui/core/colors'

const styles = theme => ({
  radios: {
    display: 'flex',
    'flex-direction': 'row',
  },
  formLabel: {
    display: 'flex',
    'align-items': 'center',
  },
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

const RadioFormField = props => {
  const {
    label,
    options,
    classes,
    className,
    input: { onChange, value },
  } = props
  const { touched, error } = props.meta

  return (
    <View className={className}>
      <FormLabel className={classes.formLabel} required={classes.required}>
        {label}
      </FormLabel>

      <RadioGroup className={classes.radios} value={value} onChange={onChange}>
        {Object.keys(options).map(key => {
          return (
            <FormControlLabel
              value={options[key]}
              control={<Radio color="#2F80ED" />}
              label={key}
            />
          )
        })}
      </RadioGroup>
      {touched && (error && <Text className={classes.errorText}>{error}</Text>)}
    </View>
  )
}

RadioFormField.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RadioFormField)
