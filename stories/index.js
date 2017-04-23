import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import styled from 'styled-components'
import CtaButton from '../ui/CtaButton'
import InputText from '../ui/InputText'
import Avatar from '../ui/Avatar'
import Dropdown from '../ui/Dropdown'

/**
 * story wrapper
 */
const StoryWrapper = styled.div`
  text-align: center;
  width: ${props => props.width ? props.width + 'px' : '250px'};
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
        <CtaButton
          width={250}
          onClick={action('clicked')}>sign up with email</CtaButton>
      </StoryInner>
    </StoryWrapper>
  ))

storiesOf('Input Text', module)
  .add('name input', () => (
    <StoryWrapper>
      <StoryInner>
        <InputText
          width={250}
          label='First Name' placeholder='Your first name...'/>
    </StoryInner>
    </StoryWrapper>
  ))
  .add('multi inputs', () => (
    <StoryWrapper>
      <StoryInner>
        <InputText
          width={250}
          label='First Name' placeholder='Your first name...'/>
        <InputText
          width={250}
          label='Last Name' placeholder='Your Last name...'/>

    </StoryInner>
    </StoryWrapper>
  ))

storiesOf('Avatar', module)
  .add('no src image', () => (
    <StoryWrapper width={70}>
      <StoryInner>
        <Avatar />
      </StoryInner>
    </StoryWrapper>
  ))

storiesOf('Dropdown', module)
  .add('Basic', () => (
    <StoryWrapper>
      <StoryInner>
        <Dropdown />
      </StoryInner>
    </StoryWrapper>
  ))
