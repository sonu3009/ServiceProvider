import React, { Component } from 'react';

export default class Header extends Component {


  
  render() {
    return (
      <div className="khlkhgkj">
        <br />
        Getting below data from common header.
        { this.props.children }
        <br/>

        <br/>
      </div>
    )
  }
}
