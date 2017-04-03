import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import styled from 'styled-components'
import CtaButton from '../ui/CtaButton'

/**
 * story wrapper
 */
const StoryWrapper = styled.div`
  text-align: center;
  padding: 20px;
`

storiesOf('Button', module)
  .add('with text', () => (
    <StoryWrapper>
      <CtaButton onClick={action('clicked')}>sign up with email</CtaButton>
    </StoryWrapper>
  ))
