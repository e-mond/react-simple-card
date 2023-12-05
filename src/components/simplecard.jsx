import React, { Component } from 'react';
import Title from './title'; 
import Description from './description'; 
import Image from './images';
import stylecss from './style.css';


class Card extends Component {
  render() {
    return (
      <div className='container'>
        <Image url={this.props.imageUrl} />
        <div className='text-container'>
          <Title text={this.props.title} />
          <Description text={this.props.description} />
        </div>
      </div>
    );
  }
}

export default Card;