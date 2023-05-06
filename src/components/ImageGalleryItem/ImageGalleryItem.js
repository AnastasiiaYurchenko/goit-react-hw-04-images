import PropTypes from 'prop-types';
import { ImageModal } from 'components/ImageModal/ImageModal';
import { GalleryItem, Image } from './ImageGalleryItem.styled';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  static propTypes = {
    picture: PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    selectedImage: null,
  };

  setSelectedImage = () => {
    this.setState({ selectedImage: this.props.picture.largeImageURL });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { selectedImage } = this.state;
    const { picture } = this.props;
    return (
      <GalleryItem>
        <Image
          src={picture.webformatURL}
          alt={picture.tags}
          onClick={this.setSelectedImage}
        />
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            isOpen={selectedImage !== null}
            onClose={this.closeModal}
          />
        )}
      </GalleryItem>
    );
  }
}
