import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchPictures = async (searchName, page) => {
  const API_KEY = '34416785-706900f4c4344fdefb158122c';
  const response = await axios.get(
    `/?q=${searchName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.status === 404) {
    throw new Error('Something went wrong, please try again', response.status);
  }
  return response.data;
};
