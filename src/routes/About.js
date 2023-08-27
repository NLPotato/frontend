import { Component } from "../core/heropy";

export default class About extends Component {
  render() {
    const { a, b, c } = history.state

    this.el.innerHTML = /* html */ `
    <h1>About</h1>
    `
  }
}