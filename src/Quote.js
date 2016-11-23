import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Button.css';
import './animate.min.css';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {}
    };
    this.newQuote = this.newQuote.bind(this);
  }
  generateIndex() {
    var index = Math.round(Math.random() * (this.props.quotes.length -1 ));
    if(index !== this.currentQuoteIndex) {
      return index;
    } else {
      return this.generateIndex();
    }
  }
  newQuote() {
    this.setState({quote: this.pickQuote() });
  }
  pickQuote() {
    // Use a randomise method to pick a quote
    // Ensure we haven't picked the same before
    this.currentQuoteIndex = this.generateIndex();
    return this.props.quotes[this.currentQuoteIndex]
  }
  componentWillMount() {
    // Needs to be negative integer.
    this.currentQuoteIndex = -1;
    this.newQuote();
  }
  render() {
    return (
      <div className="container">
        <ReactCSSTransitionGroup
          transitionName={ {
            enter: "fadeIn",
            leave: "fadeOut",
            appear: "fadeInLeft"
          } }
          transitionEnterTimeout={500}
          transitionLeave={false}
          transitionLeaveTimeout={300}>
        <div id="contentarea" className="animated" key={Math.random()}>
          <p className="lead">
          {this.state.quote.text}
          </p>
          <h1 className="jumbotron-heading">{this.state.quote.author}</h1>
        </div>
        </ReactCSSTransitionGroup>
        <div className="">
          <button className="btn red" onClick={this.newQuote}>Gimme more ❤</button>
        </div>
      </div>
    )
  }
}

export default Quote;
