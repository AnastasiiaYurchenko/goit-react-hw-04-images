import PropTypes from 'prop-types';
import { ImageModal } from 'components/ImageModal/ImageModal';
import { GalleryItem, Image } from './ImageGalleryItem.styled';
import { useState } from 'react';

export const ImageGalleryItem = ({
  picture: { webformatURL, tags, largeImageURL },
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <GalleryItem>
      <Image
        src={webformatURL}
        alt={tags}
        onClick={() => setSelectedImage(largeImageURL)}
      />
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          isOpen={selectedImage !== null}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  picture: PropTypes.shape({
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
};
