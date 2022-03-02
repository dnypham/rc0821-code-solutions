import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    };

    this.renderTopics = this.renderTopics.bind(this);
  }

  renderTopics() {
    return this.props.topics.map(topic => (
      <div key={topic.id}>
        <button className='topic-button lato-400' onClick={() => this.toggleText(topic.id)}>{topic.topic}</button>
        <div className={`topic-text-container lato-300 ${this.state.id === topic.id ? '' : 'hidden'}`}>
          <p>{topic.text}</p>
        </div>
      </div>
    ));
  }

  toggleText(id) {
    this.state.id === id
      ? this.setState({ id: null })
      : this.setState({ id: id });
  }

  render() {
    return (
      <div className='container'>
        <div className='topic-container'>
          {this.renderTopics()}
        </div>
      </div>
    );
  }
}
