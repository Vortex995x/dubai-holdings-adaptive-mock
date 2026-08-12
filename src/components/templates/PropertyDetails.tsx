import type { StaticContentMessageTextPayload } from '../../mockController';
import type { PropertyItem } from '../shared/PropertyCard';
import './PropertyDetails.css';

interface PropertyDetailsProps {
  content: StaticContentMessageTextPayload;
  onBack?: () => void;
}

const STATIC_AMENITIES = [
  'High-thrill experience', 'Themed environment', 'On-site dining', 'Guest services',
  'Lockers available', 'Photo opportunities', 'First aid nearby', 'Free visitor parking',
];

const STATIC_PAYMENT_PLAN = [
  { phase: 'Select park', amount: 'Choose experience', duration: 'In this assistant' },
  { phase: 'Select visit date', amount: 'Choose date', duration: 'Mock availability' },
  { phase: 'Confirmation', amount: 'Email confirmation', duration: 'Demo only' },
];

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ content, onBack }) => {
  const property = (content?.curation as any)?.property as PropertyItem | undefined;

  if (!property) return null;

  const formattedPrice =
    property.price != null && property.currency
      ? `${property.price.toLocaleString()} ${property.currency}`
      : property.price != null
        ? property.price.toLocaleString()
        : undefined;

  const handleSchedule = () => {
    window.AdaptiveWebsite.sendTextMessage(`Book tickets for ${property.name}`);
  };

  return (
    <div className="property-details-template">
      {onBack && (
        <button type="button" className="back-button" onClick={onBack}>
          ← Back to recommendations
        </button>
      )}

      <div className="pd-hero">
        <div className="pd-image-section">
          <img src={property.Image || ''} alt={property.name} />
          {property.productLabel && <span className="pd-badge">{property.productLabel}</span>}
        </div>
        <div className="pd-info-section">
          {property.category3 && <div className="pd-category">{property.category3}</div>}
          <h1 className="pd-name">{property.name}</h1>
          {formattedPrice && <div className="pd-price">{formattedPrice}</div>}
          {property.category1 && <div className="pd-location">{property.category1}</div>}
          {property.longDescription && <p className="pd-description">{property.longDescription}</p>}
          <div className="pd-actions">
            {property.productUrl && (
              <a href={property.productUrl} target="_blank" rel="noopener noreferrer" className="pd-btn-primary">
                View on Website
              </a>
            )}
            <button type="button" className="pd-btn-secondary" onClick={handleSchedule}>
              Book Tickets
            </button>
          </div>
        </div>
      </div>

      <section className="pd-section">
        <h2>Experience Highlights</h2>
        <div className="pd-amenities">
          {STATIC_AMENITIES.map((a, i) => (
            <span key={i} className="pd-amenity-chip">{a}</span>
          ))}
        </div>
      </section>

      <section className="pd-section">
        <h2>How the Mock Booking Works</h2>
        <div className="pd-payment-table-wrapper">
          <table className="pd-payment-table">
            <thead>
                <tr><th>Step</th><th>Action</th><th>Note</th></tr>
            </thead>
            <tbody>
              {STATIC_PAYMENT_PLAN.map((row, i) => (
                <tr key={i}><td>{row.phase}</td><td>{row.amount}</td><td>{row.duration}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="pd-note">Demonstration only. No payment is taken and no real ticket is issued.</p>
      </section>
    </div>
  );
};

export default PropertyDetails;
