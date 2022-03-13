import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native-web'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import { red } from '@material-ui/core/colors'

const styles = themes => ({
  cssUnderline: {
    '&:after': {
      borderBottomColor: '#2F80ED',
    },
  },
  cssLabel: {
    '&$cssFocused': {
      color: '#2F80ED',
    },
  },
  cssFocused: {},
  errorText: {
    color: themes.palette.error.main,
  },
  required: {
    '&:after': {
      content: '*',
      color: red,
    },
  },
})

const PickerFieldForm = props => {
  const {
    values,
    placeholder,
    classes,
    className,
    input: { value, onChange },
  } = props
  const { touched, error } = props.meta

  return (
    <View className={className}>
      <FormControl>
        <InputLabel
          htmlFor="select-label"
          FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
          required={classes.required}
        >
          {placeholder}
        </InputLabel>
        <Select
          value={value}
          onChange={onChange}
          input={
            <Input
              className={classes.cssUnderline}
              id="select-label"
              name={placeholder}
            />
          }
        >
          <MenuItem value="" />
          {Object.keys(values).map((value, index) => {
            return (
              <MenuItem className="menuItem" value={values[value]}>
                {value}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>

      {touched && (error && <Text className={classes.errorText}>{error}</Text>)}
    </View>
  )
}

PickerFieldForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PickerFieldForm)
