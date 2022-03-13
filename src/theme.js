import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#60baff',
      main: '#118ACC',
      dark: '#005d9b',
      contrastText: '#FFFFFF',
    },
    optionSelect: {
      main: '#4DAF76',
    },
    error: {
      main: '#EB5757',
    },
    subheading: {
      main: '#828282',
    },
    select: {
      selected: '#4DAF76', //green
      notSelected: '#6EB4DA', //blue
    },
  },
  typography: {
    fontFamily: 'Source Sans Pro, sans-serif',
  },
})

export default theme
