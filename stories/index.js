import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import styled from 'styled-components'
import CtaButton from '../ui/CtaButton'
import InputText from '../ui/InputText'
import Avatar from '../ui/Avatar'
import Dropdown from '../ui/Dropdown'
import Navi from '../ui/Navi'
import { Title, SubTitle, Page, Card } from '../ui/Core'

/**
 * story wrapper
 */
const StoryWrapper = styled.div`
  text-align: center;
  width: ${props => props.width ? props.width : '250px'};
  margin: 0 auto;
  padding: 20px;
`

const StoryInner = styled.div`
  text-align: left;
`

const MobileWrapper = styled.div`
  margin: 0;
  padding: 0;
`

storiesOf('Button', module)
  .add('with text', () => (
    <StoryWrapper>
      <StoryInner>
        <CtaButton
          width={'250px'}
          onClick={action('clicked')}>sign up with email</CtaButton>
      </StoryInner>
    </StoryWrapper>
  ))

storiesOf('Input Text', module)
  .add('name input', () => (
    <StoryWrapper>
      <StoryInner>
        <InputText
          width={'250px'}
          label='First Name' placeholder='Your first name...'/>
    </StoryInner>
    </StoryWrapper>
  ))
  .add('multi inputs', () => (
    <StoryWrapper>
      <StoryInner>
        <InputText
          width={'250px'}
          label='First Name' placeholder='Your first name...'/>
        <InputText
          width={250}
          label='Last Name' placeholder='Your Last name...'/>

    </StoryInner>
    </StoryWrapper>
  ))

storiesOf('Avatar', module)
  .add('no src image', () => (
    <StoryWrapper width={'70px'}>
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

  storiesOf('Page', module)
    .add('Basic', () => (
      <MobileWrapper>
          <Navi />
          <Page>
            <Title>PERSONAL DETAILS</Title>
            <Avatar style={{ margin: '30px auto' }}/>
            <InputText
              label='First Name' placeholder='Your first name...'/>
            <InputText
              label='Last Name' placeholder='Your Last name...'/>
          </Page>
      </MobileWrapper>
    ))

  storiesOf('Card', module)
    .add('Basic', () => (
      <MobileWrapper>
        <Card>
          <Title>27</Title>
          <SubTitle>October</SubTitle>
          <p>You are one step away from booking a personal consultation.</p>
        </Card>
      </MobileWrapper>
    ))
