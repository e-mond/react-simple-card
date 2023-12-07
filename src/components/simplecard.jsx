import React, { Component } from 'react';
import Title from './Title'; 
import Description from './Description'; 
import Image from './Images';
import './style.css';


class Card extends Component {
  render() {
    return (
      <div className='container'>
        <Image imageUrl={this.props.imageUrl} />
        <div className='text-container'>
          <Title text={this.props.title} />
          <Description text={this.props.description} />
        </div>
      </div>
    );
  }
}

export default Card;