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
                  Survey No. 182/9A & 183/3B, Chimakurthy,<br />
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
        <img 
          src={mapImage} 
          alt="Location Map"
        />
      </div>
    </section>
  );
};

export default ContactSection;