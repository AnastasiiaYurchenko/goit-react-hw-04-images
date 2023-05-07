import { ImageGallery } from './ImageGallery/ImageGallery';
import { Layout } from './Layout/Layout.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { useState, useEffect } from 'react';
// import { Component } from 'react';

import { Loader } from './Loader/Loader';
import * as API from '../api';

export const ERROR_MSG = 'Something went wrong, please try again';

// export class App extends Component {
//   state = {
//     searchName: '',
//     pictures: [],
//     loading: false,
//     error: null,
//     page: 1,
//   };

//   handleFormSearch = searchName => {
//     this.setState({ searchName, page: 1, pictures: [] });
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.searchName !== this.state.searchName ||
//       prevState.page !== this.state.page
//     ) {
//       this.setState({ loading: true, error: null });

//       try {
//         const fetchedPictures = await API.fetchPictures(
//           this.state.searchName,
//           this.state.page
//         );

//         this.setState(prevState => {
//           return {
//             pictures: [...prevState.pictures, ...fetchedPictures.hits],
//           };
//         });
//       } catch (error) {
//         this.setState({ error: ERROR_MSG });
//       } finally {
//         this.setState({ loading: false });
//       }
//     }
//   }

//   handleLoadMore = e => {
//     const { page } = this.state;
//     this.setState({ page: page + 1 });
//   };

//   render() {
//     const { loading, error, pictures, searchName } = this.state;
//     return (
//       <Layout>
//         <Searchbar onSearch={this.handleFormSearch} />

//         {error && <h1>{this.state.error} </h1>}
//         {pictures && (
//           <ImageGallery searchName={searchName} pictures={pictures} />
//         )}
//         {loading && <Loader />}

//         {pictures && pictures.length > 0 && (
//           <Button onClick={this.handleLoadMore} />
//         )}
//       </Layout>
//     );
//   }
// }

export const App = () => {
  const [searchName, setSearchName] = useState('');
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const handleFormSearch = searchName => {
    setSearchName(searchName);
    setPage(1);
    setPictures([]);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (searchName === '') {
      return;
    }
    async function getPictures() {
      try {
        setLoading(true);
        setError(null);
        const fetchedPictures = await API.fetchPictures(searchName, page);

        setPictures(prevState => [...prevState, ...fetchedPictures.hits]);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setLoading(false);
      }
    }
    getPictures();
  }, [searchName, page]);

  return (
    <Layout>
      <Searchbar onSearch={handleFormSearch} />

      {error && <h1>{error} </h1>}
      {pictures && <ImageGallery searchName={searchName} pictures={pictures} />}
      {loading && <Loader />}

      {pictures && pictures.length > 0 && <Button onClick={handleLoadMore} />}
    </Layout>
  );
};
