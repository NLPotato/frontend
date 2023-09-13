import {Component} from '../core/base'

export default class Headline extends Component {
  render() {
    this.el.classList.add('headline')
    this.el.innerHTML = /* html */ `
      <h1>
        <span>OMDB API</span><br>
        The OPEN<br>
        MOVIE DATABASE
      </h1>
      <p>
       The OMDb API is a RESTful web service.
      </p>
    ` 
  } 
}