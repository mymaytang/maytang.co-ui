import React from 'react'
import { Img, ContainerDiv } from '../Core'
import './Avatar.less'
import defaultImg from './default_image.jpg'
import { avatar } from '../settings'

export default class Avatar extends React.Component {

  static defaultProps = {
    radius: avatar.radius,
    gapWidth: avatar.gapWidth
  }

  constructor() {
    super()
  }

  componentWillMount() {

    let { radius } = this.props

    this.setState({
      radius: radius
    })
  }

  render() {

    let { src, gapWidth } = this.props
    let {radius} = this.state
    let style = {}
    let imgStyle = {
      borderRadius: radius/2 + 'px',
      left: gapWidth - 1 + 'px',
      top: gapWidth - 1 + 'px'
    }

    return(
      <ContainerDiv
        hasBorder
        radius={radius}
        style={style}
        className='avatar__container'>
        <Img
          className='avatar__img'
          hasBorder
          radius={radius - gapWidth * 2}
          style = { imgStyle }
          src={src || defaultImg}/>
      </ContainerDiv>
    )
  }
}
