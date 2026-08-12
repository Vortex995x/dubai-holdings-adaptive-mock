import './PropertyCard.css';

export interface PropertyItem {
  sku: string;
  name: string;
  Image?: string;
  imageAlt?: string;
  price?: number;
  currency?: string;
  productLabel?: string;
  description?: string;
  longDescription?: string;
  productUrl?: string;
  category1?: string;
  category2?: string;
  category3?: string;
  bedrooms?: number | string;
  bathrooms?: number | string;
  area?: number | string;
  areaUnit?: string;
  thrillLevel?: string;
  rideType?: string;
  minimumHeight?: string;
}

interface PropertyCardProps {
  property: PropertyItem;
  onViewMore?: (property: PropertyItem) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewMore }) => {
  const formattedPrice =
    property.price != null && property.currency
      ? `${property.price.toLocaleString()} ${property.currency}`
      : property.price != null
        ? property.price.toLocaleString()
        : undefined;

  const community = property.category1 || property.category2 || property.category3;

  const handleViewMore = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onViewMore) {
      onViewMore(property);
    } else if (property.productUrl) {
      window.open(property.productUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="property-card-wrapper">
      <div className="property-card">
        <div className="property-image-wrapper">
          <img className="property-image" src={property.Image || ''} alt={property.imageAlt || property.name} />
          {property.productLabel && <span className="property-badge">{property.productLabel}</span>}
          {community && <span className="property-community">{community}</span>}
        </div>
        <div className="property-body">
          <div className="property-name">{property.name}</div>
          {formattedPrice && <div className="property-price">{formattedPrice}</div>}
          <div className="property-specs">
            {property.rideType && <span className="property-spec">{property.rideType}</span>}
            {property.thrillLevel && <span className="property-spec">Thrill: {property.thrillLevel}</span>}
            {property.minimumHeight && <span className="property-spec">Min: {property.minimumHeight}</span>}
          </div>
          <button type="button" className="view-more-button" onClick={handleViewMore}>
            View attraction details
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
