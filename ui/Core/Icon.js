import styled from 'styled-components'
import { colors } from '../settings'

const Icon = styled.i`
  display: inline-block;
  width: ${props => props.width ? props.width + 'px' : 0};
  height: ${props => props.height ? props.height + 'px' : 0};
  background: ${props => props.src ? 'url(' + props.src + ')' : 'none'};
  background-position: center;
  background-repeat: ${props => props.repeat ? 'repeat' : 'no-repeat'}
`

export default Icon
