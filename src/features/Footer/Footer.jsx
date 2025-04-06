import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <p className="copyright">
            &copy; {currentYear} Tacos. Todos los derechos reservados
          </p>
        </div>

        {/* <div className="footer-section social-links">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
        </div> */}

        <div className="footer-section">
          <p className="credits">
            Desarrollo web por <span className="dev-name">Samuel González</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;