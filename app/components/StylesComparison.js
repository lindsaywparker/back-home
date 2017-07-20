import React, { Component } from 'react';
import Image from './Image';

export default class StylesComparison extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    const stylesMatrix = this.props.images.map((image, i) => {
      return <Image key={i} src={image.src} />;
    });

    return (
      <div>
        {stylesMatrix}
      </div>
    );
  }
}
