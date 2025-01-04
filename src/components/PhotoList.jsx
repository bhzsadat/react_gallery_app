
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import Photo from "./Photo";

// PhotoList component
const PhotoList = ({ photos, title}) => {
    const { query } = useParams();
    const dynamicTitle = query ? `Search Results for ${query}` : title || 'Gallery';

    const validPhotos = photos.filter(photo => photo.farm !== 0);

    return (
        <div className="photo-container">
            <h2>{dynamicTitle}</h2>
            <ul>
                {validPhotos.length > 0 ? (
                    validPhotos.map((photo) => (
                        <Photo key={photo.id} photo={photo} />
                ))): (
                    <li className="not-found">
                      <h3>No Results Found</h3>
                      <p>Your search did not return any results. Please try again.</p>
                    </li>
                  )}
            </ul>
        </div>
    );
};

PhotoList.propTypes = {
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        farm: PropTypes.number.isRequired,
        server: PropTypes.string.isRequired,
        secret: PropTypes.string.isRequired,
        title: PropTypes.string
      })
    ).isRequired,
    title: PropTypes.string.isRequired
  };


export default PhotoList;