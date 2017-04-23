import styled from 'styled-components'
import { colors } from '../settings'

const Input = styled.input`
  font-family: "hypatia-sans-pro",sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.8em;
  border: none;
  border-bottom: 1px solid ${colors.black};
  padding-bottom: 3px;

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    color: ${colors.lightGrey}
  }

`

export default Input
