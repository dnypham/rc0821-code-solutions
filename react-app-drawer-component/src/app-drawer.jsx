import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      backgroundImage: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.getOverlay = this.getOverlay.bind(this);
  }

  handleClick() {
    this.setState({ toggle: true });
  }

  changeBackground(game) {
    this.setState({
      backgroundImage: game,
      toggle: false
    });
  }

  getImage() {
    const backgroundImage = this.state.backgroundImage;

    if (backgroundImage === '') {
      return 'switch';
    } else if (backgroundImage === 'zelda') {
      return 'zelda';
    } else if (backgroundImage === 'pokemon') {
      return 'pokemon';
    } else if (backgroundImage === 'animal') {
      return 'animal';
    } else if (backgroundImage === 'smash') {
      return 'smash';
    } else if (backgroundImage === 'kart') {
      return 'kart';
    }
  }

  getOverlay() {
    if (this.state.toggle) {
      return (
        <div className='app-drawer-container'></div>
      );
    }
  }

  render() {
    return (
      <>
      <div className={`container ${this.getImage()}`}>
        <div className={`menu-icon-container ${this.state.toggle ? 'hidden' : ''}`} onClick={this.handleClick}>
          <i className={'fa-solid fa-bars fa-2x menu-icon'}></i>
        </div>
        {this.getOverlay()}
        <div className={`app-drawer ${this.state.toggle ? 'view' : ''}`}>
          <h3 className='lato-400 padding-left-20'>Choose a Game</h3>
          <button className='app-drawer-option lato-300 padding-left-20' onClick={() => this.changeBackground('smash')}>Super Smash Bros. Ultimate</button>
          <button className='app-drawer-option lato-300 padding-left-20' onClick={() => this.changeBackground('zelda')}>The Legend of Zelda</button>
          <button className='app-drawer-option lato-300 padding-left-20' onClick={() => this.changeBackground('kart')}>Mario Kart</button>
          <button className='app-drawer-option lato-300 padding-left-20' onClick={() => this.changeBackground('pokemon')}>Pokemon</button>
          <button className='app-drawer-option lato-300 padding-left-20' onClick={() => this.changeBackground('animal')}>Animal Crossing</button>
        </div>
      </div>
      </>
    );
  }
}
