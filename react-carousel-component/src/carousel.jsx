import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1
    };
  }

  componentDidMount() {
    this.id = setInterval(() => {
      if (this.state.id === this.props.pokemon.length) {
        this.setState({ id: 1 });
      } else {
        this.setState({ id: this.state.id + 1 });
      }
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  renderIcons() {
    return this.props.pokemon.map(pokemon => (
      <i className={`fa-solid fa-circle icons ${pokemon.id === this.state.id ? 'active' : ''}`} key={pokemon.id} onClick={() => this.setState({ id: pokemon.id })}></i>
    ));
  }

  getImage() {
    const [pokemon] = this.props.pokemon.filter(pokemon => this.state.id === pokemon.id);

    return pokemon.image;
  }

  arrowBack(id) {
    id === 1
      ? this.setState({ id: 5 })
      : this.setState({ id: id - 1 });
  }

  arrowForward(id) {
    id === this.props.pokemon.length
      ? this.setState({ id: 1 })
      : this.setState({ id: id + 1 });
  }

  render() {
    return (
      <div className='container'>
        <div className='content-container'>
          <div className='arrow-container'>
            <i className="fa-solid fa-circle-arrow-left fa-2x icons" onClick={() => this.arrowBack(this.state.id)}></i>
          </div>
          <div className='image-container'>
            <img className='image' src={this.getImage()}></img>
            <div className='dot-container'>
              {this.renderIcons()}
            </div>
          </div>
          <div className='arrow-container'>
            <i className="fa-solid fa-circle-arrow-right fa-2x icons" onClick={() => this.arrowForward(this.state.id)}></i>
          </div>
        </div>
      </div>
    );
  }
}
