import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import { View, Text, Linking } from 'react-native-web'
import { Link as RouterLink } from 'react-router-dom'

import {
  H2,
  H4,
  Headline,
  Subheading,
  Link,
  VideoModal,
  Navbar,
} from '../../components'
import Button from '../../components/Button'

import PlayCircle from '@material-ui/icons/PlayCircleFilled'

import landing1000 from '../../images/landing-1000.jpg'

const styles = theme => ({
  root: {
    height: '100px',
  },
  desktopRoot: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: theme.spacing.unit * 16,
    paddingRight: theme.spacing.unit * 16,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  headerContainer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing.unit * 4,
  },
  headerText: {
    color: 'white',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  subheading: {
    color: 'white',
    fontStyle: 'italic',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  imgContainer: {
    marginTop: theme.spacing.unit,
  },
  img: {
    borderRadius: 20,
    width: '100%',
    height: 'auto',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  playCircle: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      bottom: '5%',
      left: '5%',
    },
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing.unit * 4,
    },
    width: 80,
    height: 80,
    color: theme.palette.primary.main,
    backgroundColor: 'white',
    borderRadius: '50%',
  },
  scheduleContainer: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
  },
  description: {
    [theme.breakpoints.up('md')]: {
      width: '30%',
      color: 'white',
    },
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    textDecoration: 'none',
  },
  bg: {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${landing1000})`,
    width: '100%',
    minHeight: '100vh',

    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  highlight: {
    color: '#ffd54f',
    fontWeight: 'bold',
  },
})

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openModal: false,
    }

    this.handleOpenVideoModal = this.handleOpenVideoModal.bind(this)
    this.handleCloseVideoModal = this.handleCloseVideoModal.bind(this)
  }

  handleOpenVideoModal() {
    this.setState({ openModal: true })
    console.log('open')
  }
  handleCloseVideoModal() {
    this.setState({ openModal: false })
    console.log('close')
  }

  render() {
    const { classes } = this.props
    const { openModal } = this.state

    return (
      <View className={classes.root}>
        {/* Desktop Version */}
        <Hidden smDown>
          <View>
            <Navbar />
            <div className={classes.bg}>
              <View className={classes.desktopRoot}>
                <View>
                  <H2 className={classes.headerText}>
                    Welcome to Ardent Academy
                  </H2>
                  <Subheading className={classes.subheading}>
                    Challenging brilliant minds since 2006
                  </Subheading>
                  <Text className={classes.description}>
                    Schedule a{' '}
                    <span className={classes.highlight}>free trial</span> in a
                    course that meets your child’s educational needs, or a{' '}
                    <span className={classes.highlight}>free consultation</span>{' '}
                    with an Ardent educational consultant.
                  </Text>
                </View>

                <View className={classes.buttonsContainer}>
                  <PlayCircle
                    onClick={this.handleOpenVideoModal}
                    className={classes.playCircle}
                  />
                  <RouterLink className={classes.button} to="/form">
                    <Button variant="contained" color="primary">
                      Schedule
                    </Button>
                  </RouterLink>
                </View>
              </View>
            </div>
          </View>
        </Hidden>

        {/* Mobile Version */}
        <Hidden mdUp>
          <View className={classes.headerContainer}>
            <H4 className={classes.headerText}>
              Welcome to{'\n'}
              Ardent Academy{'\n'}
            </H4>
            <Text className={classes.headerText}>
              Maximize your child's intellectual potential to{'\n'}
              become life-long learners and leaders for the 21st century.
            </Text>

            <View
              className={classes.imgContainer}
              onClick={this.handleOpenVideoModal}
            >
              <img
                className={classes.img}
                src={landing1000}
                style={{ width: '100%', height: 'auto' }}
                alt=""
              />
              <PlayCircle className={classes.playCircle} />
            </View>
          </View>

          <View className={classes.scheduleContainer}>
            <Headline>Get Started</Headline>
            <Text className={classes.description}>
              Schedule a trial in a course that meets your child's educational
              needs, or schedule a meeting with an Ardent educational
              consultant.
            </Text>

            <RouterLink className={classes.button} to="/form">
              <Button variant="contained" color="primary">
                Schedule
              </Button>
            </RouterLink>

            <Text>Already know what course you want?</Text>
            <Link
              onPress={() =>
                Linking.openURL(
                  'http://www.ardentacademy.com/index.php/enrollment'
                )
              }
            >
              Skip straight to registration
            </Link>
          </View>
        </Hidden>

        <VideoModal
          open={openModal}
          onClose={this.handleCloseVideoModal}
          url="https://www.youtube-nocookie.com/embed/BBscjdGeY-s?rel=0&amp;showinfo=0"
        />
      </View>
    )
  }
}

export default withStyles(styles)(Landing)
