import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    };

    this.topicArray = [
      {
        topic: 'Hypertext Markup Language',
        text: 'Hypertext Markup Language (HTML) is the standard markup language is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, forms a triad of cornerstone technologies for the World Wide Web.',
        id: 1
      },
      {
        topic: 'Cascading Style Sheets',
        text: 'Cascading Style Sheets (CSS) is a style sheet language for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript',
        id: 2
      }
    ];

    this.renderTopics = this.renderTopics.bind(this);
  }

  renderTopics() {
    return this.topicArray.map(topic => (
      <>
      <button className='topic-button lato-400' key={topic.id} onClick={() => this.setState({ id: topic.id })}>{topic.topic}</button>
      {this.renderText()}
      </>
    ));
  }

  renderText() {
    if (this.state.id !== null) {
      const [topic] = this.topicArray.filter(topic => this.state.id === topic.id);

      console.log(topic.text);
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className='container'>
        {this.renderTopics()}
      </div>
    );
  }
}
