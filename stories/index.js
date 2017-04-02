import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import CtaButton from '../component/CtaButton'

storiesOf('Button', module)
  .add('with text', () => (
    <CtaButton onClick={action('clicked')}>Hello</CtaButton>
  ))
