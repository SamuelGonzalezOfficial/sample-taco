import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '+56932909467'; // Tu número con código de país
  const defaultMessage = 'Hola! Quisiera hacer una consulta sobre...';

  return (
    <div className="whatsapp-container">
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
