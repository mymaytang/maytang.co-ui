import styled from 'styled-components'
import { colors, page } from '../settings'

const Page = styled.div`
  box-sizing: content-box;
  padding: 0 ${page.padding + 'px'} ${page.padding + 'px'};
  width: ${props => props.radius ? props.radius + 'px' : props.width ? props.width + 'px' : 'auto' };
  height: ${props => props.radius ? props.radius + 'px' : props.height ? props.height + 'px' : 'auto' };
`

export default Page
