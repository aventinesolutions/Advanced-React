import React, { Component } from 'react';

export default class Page extends Component {
  render() {
    return (
      <div>
        <p>(this is the page component)</p>
        {this.props.children}
      </div>
    );
  }
}
