import React, { Component } from 'react';
import './Navigation.css';
class Navigation extends Component {

  render() {
    const sections = ['Home', 'about', 'Services', 'Portifolio', 'Contact']
    const navlinks = sections.map(section => {
      return (
        <li><a href={'#' + section } >{section}</a> </li>
      )
    });

    return (
      <nav>
        <h2 className="logo">{this.props.logoTitle}</h2>

        <ul>
          {navlinks}
        </ul>
      </nav>
    );
  }
}
export default Navigation;
