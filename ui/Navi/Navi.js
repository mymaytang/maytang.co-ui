import React from 'react'
import './Navi.less'
import {Icon} from '../Core'

import openIcon from './navi_open.svg'
import closeIcon from './navi_close.svg'

export default class Navi extends React.Component {

  static defaultProps = {
    isOpen: false
  }

  static closeProps = {
    src: openIcon
  }

  static openProps = {
    src: closeIcon
  }

  constructor() {
    super()
  }

  componentWillMount() {
    this.setState({
      isOpen: this.props.isOpen
    })
  }

  _menuToggle(evt) {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    let { isOpen } = this.state
    let iconProps = isOpen ? Navi.openProps : Navi.closeProps

    return (
      <div className='navi__container'>
        <Icon
          onClick={this._menuToggle.bind(this)}
          className='navi__icon'
          {...iconProps} />
      </div>
    )
  }
}
