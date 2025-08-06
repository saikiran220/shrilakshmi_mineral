import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import mapImage from '../../assets/images/map.png';

const ContactSection = () => {
  return (
    <section className="contact-section">
      {/* Contact Information */}
      <div className="contact-left">
        <h2 className="contact-title">
          Contact Us
        </h2>
        
        <div className="contact-container">
          <div className="contact-info">
            {/* Location */}
            <div className="info-row">
              <div className="icon-box">
                <MdLocationOn />
              </div>
              <div className="text-content">
                <p>
                  Survey No. 182/9A & 183/3B, Chimakurthy,Ram Nagar 1st line, beside bypass<br />
                  Prakasam (DT), AP-523226
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="info-row">
              <div className="icon-box">
                <MdPhone />
              </div>
              <div className="text-content phone-details">
                <div className="phone-number">
                  98668 68606
                </div>
                <p>
                  7 Days a week from 9:00 am to<br />
                  7:00 pm
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="info-row">
              <div className="icon-box">
                <MdEmail />
              </div>
              <div className="text-content">
                <p>
                  shrilakshmiminerals@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <a 
          href="https://www.google.com/maps/place/Chimakurthy,+Andhra+Pradesh+523226/@15.5850383,79.8479472,5065m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a4ae250ca031f1d:0x8b2576d4c7d91616!8m2!3d15.5855375!4d79.8671813!16zL20vMGJqNjk4?entry=ttu&g_ep=EgoyMDI1MDgwMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: 'pointer' }}
        >
          <img 
            src={mapImage} 
            alt="Location Map"
          />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;