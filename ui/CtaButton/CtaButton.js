import React from 'react'
import { Button } from '../Core'
import './CtaButton.less'


export default class CtaButton extends React.Component {

  static defaultProps = {
    width: undefined
  }

  constructor() {
    super()
  }

  componentWillMount() {

    let { width } = this.props

    this.setState({
      width: width
    })
  }

  render() {

    let { width } = this.props

    let style = {}

    if(width !== undefined) style.width = width + 'px'

    return (
      <div style={style} className='ctabutton__container'>
        <Button
          className='ctabutton__button'>{ this.props.children }</Button>
      </div>
    )
  }
}
