import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

interface FormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  serviceType?: string;
  message?: string;
}

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      newErrors.phone = 'Phone number must be at least 10 digits';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Service type validation
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        {/* Left Section - Contact Information */}
        <div className="contact-info-section">
          <h2>Contact Us</h2>
          <p className="contact-description">
            We are committed to processing the information in order to contact you and talk about your project.
          </p>
                     <ul className="contact-details">
             <li className="contact-item">
               <div className="contact-icon">
                 <FaMapMarkerAlt />
               </div>
               <div className="address-lines">
                 <span>Survey No. 182/9A & 183/3B, Ram Nagar 1st line, beside bypass</span>
                 <span>Chimakurthy, Prakasam (DT), AP-523226</span>
               </div>
             </li>
               <li className="contact-item">
                <div className="phone-icon">
                  <FaPhone />
                </div>
                <div className="phone-lines">
                  <div>+91 9948550009</div>
                  <div>+91 8592299946</div>
                
                </div>
              </li>
             <li className="contact-item">
               <div className="email-icon">
                 <FaEnvelope />
               </div>
               <span>shrilakshmiminerals@gmail.com</span>
             </li>
           </ul>
        </div>

        {/* Right Section - Contact Form */}
        <div className="contact-form-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`form-input ${errors.name ? 'error' : ''}`}
              />
              {errors.name && (
                <div className="error-message">{errors.name}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Your Phone <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`form-input ${errors.phone ? 'error' : ''}`}
              />
              {errors.phone && (
                <div className="error-message">{errors.phone}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Your Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input ${errors.email ? 'error' : ''}`}
              />
              {errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="serviceType">
                Type Service <span className="required">*</span>
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                className={`form-select ${errors.serviceType ? 'error' : ''}`}
              >
                <option value="">Select a service type</option>
                <option value="granite">Granite</option>
                <option value="marble">Marble</option>
                <option value="quartz">Quartz</option>
                <option value="sandstone">Sandstone</option>
                <option value="custom">Custom Stone</option>
                <option value="export">Export Services</option>
                <option value="consultation">Consultation</option>
              </select>
              {errors.serviceType && (
                <div className="error-message">{errors.serviceType}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Please enter your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className={`form-textarea ${errors.message ? 'error' : ''}`}
                placeholder="Please enter your message here..."
              ></textarea>
              {errors.message && (
                <div className="error-message">{errors.message}</div>
              )}
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection; 