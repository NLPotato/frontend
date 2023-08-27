import { Component } from './core/heropy'
import TheHeader from './components/TheHeader'

export default class App extends Component {
  render() {
    const routerView = document.createElement('router-view') // custom element
    this.el.append(
      new TheHeader().el,
      routerView
    )
  }
}