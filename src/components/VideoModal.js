import React from 'react'
import { View } from 'react-native-web'
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import Modal from '@material-ui/core/Modal'

const VideoContainer = styled(View)`
  flex: 1;
  position: relative;
  padding-bottom: 56.25%;

  height: 0;
  overflow: hidden;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const styles = theme => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
  },
})

const VideoPlayer = props => (
  <Modal
    className={props.classes.modal}
    open={props.open}
    onClose={props.onClose}
  >
    <View className={props.classes.root}>
      <VideoContainer>
        <iframe
          title="Youtube video player"
          width="100%"
          height="100%"
          src={props.url}
          frameborder="0"
          allow="encrypted-media"
          allowfullscreen
        />
      </VideoContainer>
    </View>
  </Modal>
)

export default withStyles(styles)(VideoPlayer)
