import PropTypes from 'prop-types';
import { ModalContent } from './ImageModal.styled';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '0',
    transform: 'translate(-50%, -50%)',
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    overflow: 'visible',
    border: 'none',
  },
  overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
};

Modal.setAppElement('#root');

export const ImageModal = ({ image, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContent>
        <img src={image} alt="" />
      </ModalContent>
    </Modal>
  );
};

ImageModal.propTypes = {
  image: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
