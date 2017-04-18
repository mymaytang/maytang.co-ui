import React from 'react'
import { Input, Label } from '../Core'
import './InputText.less'

export default class InputText extends React.Component {

  static defaultProps = {
    id: null,
    label: null
  }

  constructor() {
    super()
  }

  componentWillMount() {
    let { id, label } = this.props
    this.id = id ? id : 'inputtext_' + Math.round( Math.random() * 1000 )
    this.label = label ? label : this.id
  }

  render() {


    return (
      <div className='inputtext__container'>
        <Label className='inputtext__label' htmlFor={this.id}>{ this.label }</Label>
        <Input id={ this.id } />
      </div>
    )
  }
}
