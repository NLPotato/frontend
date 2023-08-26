import { Component } from '../core/heropy'

export default class FruitItem extends Component {
  constructor(payload) {
    super({
      tagName: 'li',
      props: payload.props
    })
  }

  render() {
    this.el.textContent = `
    <span>${ this.props.name }</span>
    `
  }
}