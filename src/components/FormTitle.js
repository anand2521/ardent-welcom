import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { View, Text } from 'react-native-web'

import Headline from './Headline'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.unit,
  },
  headline: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  description: {
    color: theme.palette.subheading.main,
    textAlign: 'center',
  },
  img: {
    width: '15%',
  },
})

const FormTitle = ({ title, icon, description, classes }) => (
  <View className={classes.root}>
    <img className={classes.img} src={icon} alt="" />
    <Headline className={classes.headline}>{title}</Headline>
    <Text className={classes.description}>{description}</Text>
  </View>
)

export default withStyles(styles)(FormTitle)
