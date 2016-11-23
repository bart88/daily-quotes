import React, { Component } from 'react';

class Header extends Component {
  componentWillMount() {
    var date = new Date();
    if(date.getMonth() === 10 && date.getDate() === 24) {
      this.notice = "Happy anniversary ♡";
    }

  }
  render() {
    return (
      <div className="mastheader clearfix">
        <div className="inner">
          <h1 className="header">Quotes of love and inspiration for the one I love</h1>
          <h5>{this.notice}</h5>
        </div>
      </div>
    );
  }
}

export default Header;
