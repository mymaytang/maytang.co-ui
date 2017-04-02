import React from 'react'
import './CtaButton.less'

export default class CtaButton extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className='ctabutton__container'>
        <button>{ this.props.children }</button>
      </div>
    )
  }
}
