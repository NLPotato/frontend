import { Component } from './core/heropy'
import TheHeader from './components/TheHeader'

export default class App extends Component {
  render() {
    this.el.append(
      new TheHeader().el
    )
  }
}