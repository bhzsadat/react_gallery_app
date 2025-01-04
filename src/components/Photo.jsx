import PropTypes from 'prop-types';

// Photo component
const Photo = ({ photo }) => {
  const src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
  return (
    <li>
      <img src={src} alt={photo.title} />
    </li>
  );
};

Photo.propTypes = {
  photo: PropTypes.shape({
    farm: PropTypes.number.isRequired,
    server: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
    title: PropTypes.string
  }).isRequired
};

export default Photo;

