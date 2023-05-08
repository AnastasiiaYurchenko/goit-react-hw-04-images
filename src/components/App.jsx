import { ImageGallery } from './ImageGallery/ImageGallery';
import { Layout } from './Layout/Layout.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { useState, useEffect } from 'react';
import { Loader } from './Loader/Loader';
import * as API from '../api';

export const ERROR_MSG = 'Something went wrong, please try again';

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
