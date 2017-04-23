import React from 'react'
import { Input, Label, ContainerDiv } from '../Core'
import './InputText.less'

export default class InputText extends React.Component {

  static defaultProps = {
    id: null,
    label: null,
    placeholder: '',
    width: undefined
  }

  constructor() {
    super()
  }

  componentWillMount() {
    let { id, label, width } = this.props
    this.id = id ? id : 'inputtext_' + Math.round( Math.random() * 1000 )
    this.label = label ? label : this.id

    this.setState({
      width: width
    })
  }

  render() {

    let { placeholder } = this.props
    let { width } = this.state

    let style = {}

    if(width !== undefined) style.width = width + 'px'

    return (
      <ContainerDiv className='inputtext__container' style={ style }>
        <Label className='inputtext__label' htmlFor={this.id}>{ this.label }</Label>
        <Input
          className='inputtext__input'
          id={ this.id }
          placeholder={ placeholder } />
      </ContainerDiv>
    )
  }
}
