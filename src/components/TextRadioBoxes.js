import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { PropTypes } from 'prop-types'

import { View, Text } from 'react-native-web'
import Button from '@material-ui/core/Button'

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
    margin: theme.spacing.unit,
  },
  button: {
    display: 'flex',
    padding: theme.spacing.unit,
    textTransform: 'none',
    minHeight: 80,
  },
  errorText: {
    width: '100%',
    color: theme.palette.error.main,
    textAlign: 'center',
  },
})

class TextRadioBoxes extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(newValue) {
    this.props.input.onChange(newValue)
  }

  render() {
    const { options, classes } = this.props
    const { value: fieldValue } = this.props.input
    const { touched, error } = this.props.meta

    return (
      <View className={classes.root}>
        {touched &&
          (error && <Text className={classes.errorText}>{error}</Text>)}
        {Object.keys(options).map(key => {
          const { value, title } = options[key]

          return (
            <View className={classes.buttonContainer}>
              <Button
                onClick={() => {
                  this.handleChange(value)
                }}
                className={classes.button}
                color="primary"
                variant={fieldValue === value ? 'contained' : 'outlined'}
                style={{ fontWeight: fieldValue === value ? 'bold' : 'normal' }}
              >
                {title}
              </Button>
            </View>
          )
        })}
      </View>
    )
  }
}

TextRadioBoxes.propTypes = {
  options: PropTypes.object.isRequired,
}

export default withStyles(styles)(TextRadioBoxes)
