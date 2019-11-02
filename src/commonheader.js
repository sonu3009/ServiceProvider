import React, { Component } from 'react';
import Header from '../src/common/header';

export default class Commonheader extends Component {
  constructor() {
    super()
    this.state = [{
      count : 10,
      Name: 'Harry'}
    ] 
  }

  render() {
    return (
      <div className="commonheader">
        { this.props.children }
        Header calling with data state 
        <Header children={[this.state ]}/>
      </div>
    )
  }
}
