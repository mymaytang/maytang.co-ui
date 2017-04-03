import React from 'react'
import Button from '../Core/Button'
import './CtaButton.less'


export default class CtaButton extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className='ctabutton__container'>
        <Button>{ this.props.children }</Button>
      </div>
    )
  }
}
