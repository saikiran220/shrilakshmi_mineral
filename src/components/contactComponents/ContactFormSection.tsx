import React, { useState } from 'react';

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
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>example@teamwebflow.com</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="address-lines">
                <span>4074 Ebert Summit Suite 375</span>
                <span>Lake Leonardchester</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9844 21.5573 21.2136 21.3521 21.4019C21.1469 21.5902 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9452 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3146 6.72533 15.2661 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09481 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65182C2.82196 2.44695 3.0498 2.28335 3.30379 2.17148C3.55778 2.05962 3.83233 2.00195 4.10999 2H7.10999C7.59522 1.99522 8.06574 2.16708 8.43376 2.48353C8.80178 2.79999 9.04201 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97348 7.27675 9.89399 7.64959C9.8145 8.02243 9.62985 8.36372 9.35999 8.63L8.08999 9.9C9.51355 12.4136 11.5864 14.4865 14.1 15.91L15.37 14.64C15.6363 14.3701 15.9776 14.1855 16.3504 14.106C16.7233 14.0265 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>+44 123 654 7890</span>
            </div>
          </div>
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