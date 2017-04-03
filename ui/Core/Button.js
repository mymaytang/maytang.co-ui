import styled from 'styled-components'
import { colors } from '../settings'

const Button = styled.button`
  font-family: "hypatia-sans-pro",sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.6em;
  text-transform: uppercase;
  background: none;
  border-radius: 0;
  border: 0;
  padding: 11px;
  box-shadow:
  	0 0 0 1px ${colors.black},
    0 0 0 4px ${colors.white},
  	0 0 0 5px ${colors.black};
  margin: 0rem;
  transition: all 0.25s;


  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    background: ${props => props.hoverColor || colors.pink};
  }
`

export default Button
