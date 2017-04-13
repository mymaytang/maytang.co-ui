import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import styled from 'styled-components'
import CtaButton from '../ui/CtaButton'
import InputText from '../ui/InputText'
/**
 * story wrapper
 */
const StoryWrapper = styled.div`
  text-align: center;
  max-width: 250px;
  margin: 0 auto;
  padding: 20px;
`

const StoryInner = styled.div`
  text-align: left;
`

storiesOf('Button', module)
  .add('with text', () => (
    <StoryWrapper>
      <StoryInner>
        <CtaButton onClick={action('clicked')}>sign up with email</CtaButton>
      </StoryInner>
    </StoryWrapper>
  ))

storiesOf('Input Text', module)
  .add('default', () => (
    <StoryWrapper>
      <StoryInner>
        <InputText label='First Name:'/>
    </StoryInner>
    </StoryWrapper>
  ))
