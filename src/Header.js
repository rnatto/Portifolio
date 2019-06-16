import React, { Component } from 'react';
import Background from './img/background.jpg';
import './Header.css';
const myStyles = {
    'backgroundImage': `url( ${Background} )`,
    'height': '80vh',
    'backgroundSize': 'cover'
}
class Header extends Component {
    render() {
        return (
            <header style={myStyles}>
                <h1>{this.props.name}</h1>
                <p>{this.props.job}</p>
                <a href="#Button">Find Out More</a>
            </header>
        );
    }
};

export default Header;