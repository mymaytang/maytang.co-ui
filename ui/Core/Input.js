import styled from 'styled-components'
import { colors } from '../settings'

const Input = styled.input`
  font-family: "hypatia-sans-pro",sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.6em;
  border: none;
  border-bottom: 1px solid ${colors.black};


  &:focus {
    outline: none;
  }
`

export default Input
