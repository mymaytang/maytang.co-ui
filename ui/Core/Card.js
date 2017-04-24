import styled from 'styled-components'
import { colors, page, card } from '../settings'
import Title from './Title'

const Card = styled.div`
  color: white;
  display: block;
  background: ${colors.black};
  box-sizing: content-box;
  box-shadow: 1px 1px 4px 0 black;
  margin: ${card.paddingTop + 'px'} ${card.padding + 'px'} ${card.padding + 'px'};
  padding: 0 ${page.padding + 'px'} ${page.padding + 'px'};
  width: ${props => props.radius ? props.radius + 'px' : props.width ? props.width + 'px' : 'auto' };
  height: ${props => props.radius ? props.radius + 'px' : props.height ? props.height + 'px' : 'auto' };

  h1 {
    font-size: 9.6em;
    font-weight: 300;
    padding: 0;
    margin: 0;
  }

  h2 {
    font-size: 2.4em;
    font-weight: 300;
    padding: 0;
    margin: 0;
    margin-top: -20px;
  }

  p {
    font-size: 1.8em;
  }

`

export default Card
