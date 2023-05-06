import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ListGallery } from './ImageGallery.styled';

export const ImageGallery = ({ pictures }) => {
  return (
    <ListGallery>
      {pictures &&
        pictures.map(picture => {
          return <ImageGalleryItem key={picture.id} picture={picture} />;
        })}
    </ListGallery>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  searchName: PropTypes.string,
};
