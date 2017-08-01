import React, { Component } from 'react';
import PageInfo from './PageInfo';
import ImagesList from './ImagesList';
import { DISPLAY_NAME } from '../helpers/constants';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: [],
    };
  }

  handleFilter(e) {
    this.setState({ input: e.target.value.split(' ').filter(word => word !== '') });
  }

  componentDidMount() {
    if (!this.props.images.length) this.props.fetchImages();
  }

  render() {
    const renderImages = !this.state.input.length ?
      []
      :
      this.props.images.filter(image =>
        image.src.includes(this.state.input[0].toLowerCase()),
      );

    return (
      <div className='main'>
        <div className='page-info'>
          <container>
            <h2 className='page-title'>SEARCH</h2>
            <input className='search-input'
                   type='text'
                   placeholder='Search'
                   onChange={this.handleFilter.bind(this)} />
          </container>
        </div>
        <ImagesList isLoading={this.props.isLoading}
                  images={renderImages}
                  favorites={this.props.favorites}
                  handleFavorite={this.props.handleFavorite.bind(this)}/>
      </div>
    );
  }
}
