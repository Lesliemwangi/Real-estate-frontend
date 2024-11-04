import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <Link to={`/properties/${property.id}`}>
        <img src={property.imageUrl} alt={property.name} />
        <h2>{property.name}</h2>
        <p>Location: {property.location}</p>
        <p>Price: {property.price}</p>
        <p>Bedrooms: {property.bedrooms}</p>
        <p>Bathrooms: {property.bathrooms}</p>
        <p>Size: {property.size}</p>
      </Link>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    bedrooms: PropTypes.string.isRequired,
    bathrooms: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
  }).isRequired,
};

export default PropertyCard;
