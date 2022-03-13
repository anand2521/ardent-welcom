import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { PropTypes } from 'prop-types'

import { View, Text } from 'react-native-web'
import Button from '@material-ui/core/Button'

const TopicBlue = '#6EB4DA'
const SelectedGreen = '#4DAF76'

const styles = theme => ({
  root: {
    display: 'flex',
    'justify-content': 'space-around',
  },
  buttonContainer: {
    'flex-grow': 1,
    'flex-shrink': 0,
    'flex-basis': '40%',
    padding: theme.spacing.unit,
  },
  button: {
    display: 'flex',
    padding: theme.spacing.unit,
    minHeight: 80,
  },
  iconContainer: {
    display: 'flex',
    flex: 1,
    'align-items': 'center',
  },
  icon: {
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '30%',
    },
    height: 'auto',
    'vertical-align': 'middle',
  },
  label: {
    'text-align': 'center',
    marginTop: theme.spacing.unit,
  },
  errorText: {
    width: '100%',
    color: theme.palette.error.main,
    textAlign: 'center',
  },
})

class IconRadioBoxes extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.includesValue = this.includesValue.bind(this)
    this.selectBackgroundColor = this.selectBackgroundColor.bind(this)
  }

  handleChange(fieldValue, newValue, onChange, radio = true) {
    //If buttons act as radio buttons or check boxes
    if (radio) {
      onChange(newValue)
    } else {
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
  }

  includesValue(fieldValue, value, radio) {
    //Determine if value == field value for radio or if value is in fieldvalue for !radio
    if (radio) {
      return fieldValue === value
    } else {
      //If it's not empty, check if it's in fieldValue (list), otherwise return false
      return fieldValue ? fieldValue.includes(value) : false
    }
  }

  selectBackgroundColor(fieldValue, value, radio, variant, styles) {
    const selected = this.includesValue(fieldValue, value, radio)

    if (selected) {
      return styles.palette.select.selected
    } else {
      return variant === 'contained' ? styles.palette.select.notSelected : ''
    }
  }

  render() {
    const {
      options,
      icon,
      containedTitle,
      wrap,
      variant,
      column,
      radio,
      classes,
    } = this.props
    const { onChange, value: fieldValue } = this.props.input
    const { touched, error } = this.props.meta

    return (
      <View
        className={classes.root}
        style={{
          'flex-wrap': wrap ? 'wrap' : 'no-wrap',
          'flex-direction': column ? 'column' : 'row',
        }}
      >
        {touched &&
          (error && <Text className={classes.errorText}>{error}</Text>)}

        {Object.keys(options).map(key => {
          const { value, title } = options[key]

          return (
            <View className={classes.buttonContainer}>
              <Button
                className={`${classes.button} `}
                onClick={() => {
                  this.handleChange(fieldValue, value, onChange, radio)
                }}
                // onClick={() => {onChange(value)}}
                variant={variant}
                style={{
                  backgroundColor: this.includesValue(fieldValue, value)
                    ? SelectedGreen
                    : [variant === 'contained' ? TopicBlue : 'white'],
                }}
              >
                <View className={classes.iconContainer}>
                  {icon && (
                    <img
                      className={classes.icon}
                      src={options[key]['icon']}
                      alt=""
                    />
                  )}
                  {containedTitle && <Text>{title}</Text>}
                </View>
              </Button>
              {!containedTitle && (
                <Text className={classes.label}>{title}</Text>
              )}
            </View>
          )
        })}
      </View>
    )
  }
}

IconRadioBoxes.propTypes = {
  options: PropTypes.object.isRequired,
  icon: PropTypes.bool.isRequired,
  containedTitle: PropTypes.bool.isRequired,
  wrap: PropTypes.bool.isRequired,
  radio: PropTypes.bool.isRequired,
}

export default withStyles(styles)(IconRadioBoxes)
