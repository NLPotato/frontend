import { Component } from '../core/base'

export default class MovieItem extends Component {
  constructor(props) {
    super({
      props,
      tagName: 'a',
    });
  }

  render() {
    const { movie } = this.props;

    this.el.setAttribute('href', `/#/movie?id=${ movie.imdbID }`)
    this.el.classList.add('movie')
    this.el.style.backgroundImage = `url(${ movie.Poster })` // using .backgroundImage: to make all images have the same size
    this.el.innerHTML = /* html */ `
      <div class="info">
        <div class="year">
          ${ movie.Year }
        </div>
        <div class="title">
          ${ movie.Title }
        </div>
      </div>
    `
  }
}