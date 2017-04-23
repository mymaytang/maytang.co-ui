import styled from 'styled-components'
import { colors } from '../settings'

const Img = styled.img`
  width: ${props => props.radius ? props.radius + 'px' : 'auto'};
  height: ${props => props.radius ? props.radius + 'px' : 'auto'};
  border: ${props => props.hasBorder ? '1px solid ' + colors.midGrey : 'none'};
  border-radius: ${props => props.radius ? '50%' : '0px'};
  src: ${props => props.src ? props.src : ''};
`

export default Img
