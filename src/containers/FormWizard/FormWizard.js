import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
//Enable Values for form value debudding
// import { Values } from "redux-form-website-template";
import { View } from 'react-native-web'
import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import Stepper from '../../components/Stepper'
import Button from '../../components/Button'

import {
  ChildrenInformationForm,
  ParentInformationForm,
  ChildInformationPrimaryInterestForm,
  ChildInformationSecondaryInterestForm,
  ChildInformationGradeForm,
  ChildInformationChallengedForm,
  ConfirmLanguageForm,
  ConfirmApplicationForm,
} from './'

import { Header, Footer } from '../../components'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: '100vh',
    paddingBottom: theme.spacing.unit,
  },
  header: {},
  formContainer: {
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.up('md')]: {
      width: '30%',
    },

    flex: 1,
    alignSelf: 'center',
  },
  footer: {
    flex: 1,
    alignSelf: 'flex-end',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  buttonSpacer: {
    width: theme.spacing.unit * 4,
  },
})

class FormWizard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //Alter page only to change state of form, activeStep and activeTitle will update automatically
      page: 0,
      activeStep: 0,
      activeTitle: 0,
      isMathInterest: false,

      titles: [
        'Parent Information',
        'Children Information',
        'Confirmation',
        'Not Found',
      ],
      steps: ['Parent Info', 'Child Info', 'Confirm'],
    }

    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)

    this.updateStepperAndTitle = this.updateStepperAndTitle.bind(this)
  }

  componentDidMount() {
    this.updateStepperAndTitle()
  }

  updateStepperAndTitle() {
    const { page } = this.state

    switch (true) {
      case page === 0:
        this.setState({ activeStep: 0, activeTitle: 0 })
        break
      case page >= 1 && page <= 5:
        this.setState({ activeStep: 1, activeTitle: 1 })
        break
      case page === 6:
        this.setState({ activeStep: 2, activeTitle: 2 })
        break
      case page === 7:
        this.setState({ activeStep: 3, activeTitle: 2 })
        break
      default:
        this.setState({ activeStep: 0, activeTitle: 4 })
    }
  }

  nextPage() {
    const { isMathInterest, page } = this.state
    if (!isMathInterest && page === 3) {
      this.setState(
        (prevState, props) => ({
          page: prevState.page + 3,
        }),
        () => {
          this.updateStepperAndTitle()
        }
      )
    } else {
      this.setState(
        (prevState, props) => ({
          page: prevState.page + 1,
        }),
        () => {
          this.updateStepperAndTitle()
        }
      )
    }
  }

  prevPage() {
    const { page, isMathInterest } = this.state
    if (page === 6 && !isMathInterest) {
      this.setState(
        (prevState, props) => ({
          page: prevState.page - 3,
        }),
        () => {
          this.updateStepperAndTitle()
        }
      )
    } else if (page > 0) {
      this.setState(
        (prevState, props) => ({
          page: prevState.page - 1,
        }),
        () => {
          this.updateStepperAndTitle()
        }
      )
    } else {
      this.props.history.push('/')
    }
  }

  render() {
    const { classes, dispatch } = this.props
    const { titles, page, activeStep, steps, activeTitle } = this.state
    return (
      <View className={classes.root}>
        <Header
          title={titles[activeTitle]}
          onBack={this.prevPage}
          showBack={page < 7}
        />
        <View className={classes.formContainer}>
          <Stepper activeStep={activeStep} steps={steps} />

          <View>
            {page === 0 && <ParentInformationForm onSubmit={this.nextPage} />}
            {page === 1 && <ChildrenInformationForm onSubmit={this.nextPage} />}
            {page === 2 && (
              <ChildInformationPrimaryInterestForm
                onSubmit={values => {
                  if (values.primaryInterest === 'math') {
                    this.setState({ ...this.state, isMathInterest: true })
                  } else {
                    this.setState({ ...this.state, isMathInterest: false })
                  }
                  this.nextPage()
                }}
              />
            )}
            {page === 3 && (
              <ChildInformationSecondaryInterestForm onSubmit={this.nextPage} />
            )}
            {page === 4 && (
              <ChildInformationGradeForm onSubmit={this.nextPage} />
            )}
            {page === 5 && (
              <ChildInformationChallengedForm onSubmit={this.nextPage} />
            )}
            {page === 6 && <ConfirmLanguageForm onSubmit={this.nextPage} />}
            {page === 7 && <ConfirmApplicationForm />}
          </View>

          {page < 7 && (
            <View className={classes.buttons}>
              <Hidden xsDown>
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={this.prevPage}
                >
                  Previous
                </Button>
                <View className={classes.buttonSpacer} />
              </Hidden>
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  dispatch(submit('wizard'))
                }}
              >
                {page < 6 ? 'Next' : 'Submit'}
              </Button>
            </View>
          )}
        </View>

        {page < 7 && <Footer className={classes.footer} />}

        {/* Uncomment to show form values for debugging */}
        {/* <Values form="wizard"/> */}
      </View>
    )
  }
}

export default compose(
  withStyles(styles),
  connect()
)(FormWizard)
