
import React from 'react'
import moment from 'moment'
import { configure, addDecorator, setAddon } from '@kadira/storybook'
import infoAddon from '@kadira/react-storybook-addon-info'
import { setOptions } from '@kadira/storybook-addon-options'

setOptions({
  name: 'maytang.co UI',
  url: 'https://github.com/mymaytang/maytang.co-ui'
})

function loadStories() {

	require('../stories/index')

}

configure(loadStories, module)
