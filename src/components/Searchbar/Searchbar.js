import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  ButtonSearch,
  InputSearch,
  LabelBtn,
  SearchForm,
  SearchbarCont,
} from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export class Searchbar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    searchName: '',
  };

  handleSearchNameChange = e => {
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchName.trim() === '') {
      return alert('Enter image name or photo name');
    }

    this.props.onSearch(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <SearchbarCont>
        <SearchForm onSubmit={this.handleSubmit}>
          <ButtonSearch type="submit">
            <AiOutlineSearch size={48} />
            <LabelBtn>Search</LabelBtn>
          </ButtonSearch>

          <InputSearch
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchName}
            onChange={this.handleSearchNameChange}
          />
        </SearchForm>
      </SearchbarCont>
    );
  }
}
