import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const StyledButton = styled(Button).attrs({
  size: 'large',
  style: { textTransform: 'none' },
})`
  width: 50%;
`

export default StyledButton
