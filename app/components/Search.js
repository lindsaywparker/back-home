import React, { Component } from 'react';
import PageInfo from './PageInfo';
import ImagesList from './ImagesList';
import { DISPLAY_NAME } from '../helpers/constants';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      searchTerm: '',
    };
  }

  handleFilter(e) {
    this.setState({
      input: e.target.value,
      searchTerm: e.target.value.split(' ').join('-'),
    });
  }

  clearSearchInput() {
    this.setState({
      input: '',
      searchTerm: '',
    });
  }

  componentDidMount() {
    if (!this.props.images.length) this.props.fetchImages();
  }

  render() {
    const renderImages = this.props.images.filter(image =>
      image.src.includes(this.state.searchTerm.toLowerCase()),
    );
    const renderImagesList = this.props.isLoading ?
      <div className='loader-container'>
        <img className='loader' src='../assets/loader.gif' alt='Loading...' />
      </div>
      :
      <ImagesList isLoading={this.props.isLoading}
                  images={renderImages}
                  favorites={this.props.favorites}
                  handleFavorite={this.props.handleFavorite.bind(this)}/>;

    return (
      <div className='search'>
        <div className='page-info'>
          <container>
            <h2 className='page-title'>SEARCH</h2>
            <div className='search-clear-container'>
              <input className='search-input'
                type='text'
                placeholder='e.g., contemporary kitchen, victorian, ...'
                autoFocus
                onChange={this.handleFilter.bind(this)}
                value={this.state.input} />
                <img className='clear-search-img'
                     src='../assets/clear-search.svg'
                     onClick={this.clearSearchInput.bind(this)} />
            </div>
          </container>
        </div>
        {renderImagesList}
      </div>
    );
  }
}
