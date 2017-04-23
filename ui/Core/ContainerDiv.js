import styled from 'styled-components'
import { colors } from '../settings'

const ContainerDiv = styled.div`
  box-sizing: content-box;
  margin-bottom: 22px;
  width: ${props => props.radius ? props.radius + 'px' : props.width ? props.width + 'px' : 'auto' };
  height: ${props => props.radius ? props.radius + 'px' : props.height ? props.height + 'px' : 'auto' };
  border-radius: ${props => props.radius ? '50%' : '0'};
  border: ${props => props.hasBorder ? '1px solid ' + colors.black + '' : 'none'};
`

export default ContainerDiv
