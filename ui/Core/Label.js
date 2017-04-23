import styled from 'styled-components'
import { colors } from '../settings'

const Label = styled.label`
  font-family: "hypatia-sans-pro",sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.6em;
  padding-bottom: 7px;
  text-transform: uppercase;

  &:after {
    content: ':';
  }

  &:focus {
    outline: none;
  }
`

export default Label
