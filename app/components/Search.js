import React, { Component } from 'react';
import PageInfo from './PageInfo';
import ImagesList from './ImagesList';
import { DISPLAY_NAME } from '../helpers/constants';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      searchTerm: [''],
    };
  }

  componentDidMount() {
    if (!this.props.images.length) this.props.fetchImages();
  }

  handleFilter(e) {
    this.setState({
      input: e.target.value,
      searchTerm: e.target.value.toLowerCase().split(' '),
    });
  }

  clearSearchInput() {
    this.setState({
      input: '',
      searchTerm: '',
    });
  }

  filterImages() {
    const { searchTerm } = this.state;
    return this.props.images.filter((image) => {
      let find = true;
      for (let i = 0; i < searchTerm.length; i++) {
        find = image.src.includes(searchTerm[i]);
        if (!find) return false;
      }
      return find;
    });
  }

  render() {
    const renderImages = this.filterImages();
    const renderImagesContent = this.props.isLoading ?
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
        {renderImagesContent}
      </div>
    );
  }
}
