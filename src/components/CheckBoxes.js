import React, { Component } from 'react'
//To be used if values are needed from other form pages
// import {formValueSelector} from 'redux-form';
// import { formValues } from 'redux-form'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import { PropTypes } from 'prop-types'

import { View, Text } from 'react-native-web'
import Button from './Button'

const TopicBlue = '#6EB4DA'
const TopicGreen = '#4DAF76'

const styles = theme => ({
  root: {
    display: 'flex',
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
    'justify-content': 'space-around',
  },
  buttonContainer: {
    'flex-grow': 1,
    'flex-shrink': 0,
    'flex-basis': '40%',
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
  },
  button: {
    display: 'flex',
    padding: theme.spacing.unit,
  },
  buttonSelected: {
    background: 'green',
  },
  iconContainer: {
    display: 'flex',
    flex: 1,
    'align-items': 'center',
  },
  icon: {
    width: '20%',
    height: 'auto',
    'vertical-align': 'middle',
  },
  label: {
    'text-align': 'center',
  },
  errorText: {
    width: '100%',
    color: theme.palette.error.main,
    textAlign: 'center',
  },
})

class CheckBoxes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: [],
    }

    this.handleChange = this.handleChange.bind(this)
    this.includesValue = this.includesValue.bind(this)
  }

  handleChange(fieldValue, newValue, onChange) {
    // const {value: fieldValue, onChange} = this.props.input;

    //If fieldValue is not undefined/empty
    if (fieldValue) {
      let newFieldValue

      //If it contains selected value, remove it. And vise versa.
      if (fieldValue.includes(newValue)) {
        newFieldValue = fieldValue.filter(function(value) {
          return value !== newValue
        })
      } else {
        newFieldValue = fieldValue.slice(0)
        newFieldValue.push(newValue)
      }

      onChange(newFieldValue)
    } else {
      onChange([newValue])
    }
  }

  includesValue(fieldValue, value) {
    //If it's not empty, check if it's in fieldValue (list), otherwise return false

    if (fieldValue) {
      return fieldValue.includes(value)
    } else {
      return false
    }
  }

  render() {
    const {
      options,
      classes,
      input: { value: fieldValue, onChange },
    } = this.props
    const { touched, error } = this.props.meta

    return (
      <View className={classes.root}>
        {touched &&
          (error && <Text className={classes.errorText}>{error}</Text>)}

        {Object.keys(options).map(key => {
          const { value, icon } = options[key]
          return (
            <View className={classes.buttonContainer}>
              <Button
                onClick={() => {
                  this.handleChange(fieldValue, value, onChange)
                }}
                className={classes.button}
                variant="contained"
                style={{
                  backgroundColor: this.includesValue(fieldValue, value)
                    ? TopicGreen
                    : TopicBlue,
                }}
              >
                <View className={classes.iconContainer}>
                  <img className={classes.icon} src={icon} alt="" />
                </View>
              </Button>
              <Text className={classes.label}>{key}</Text>
            </View>
          )
        })}
      </View>
    )
  }
}

CheckBoxes.propTypes = {
  options: PropTypes.object.isRequired,
}

export default compose(withStyles(styles))(CheckBoxes)
