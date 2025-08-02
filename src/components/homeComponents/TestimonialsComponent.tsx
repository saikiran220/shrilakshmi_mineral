
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: "Avinash Kr",
    position: "Co-Founder at xyz",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "Like this video and ask your questions in comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop."
  },
  {
    name: "Bharat Kunal",
    position: "Manager at xyz",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: "Like this video and ask your questions in comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop."
  },
  {
    name: "Prabhakar D",
    position: "Founder / CEO at xyz",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    text: "Like this video and ask your questions in comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop."
  }
];

const TestimonialsComponent = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>TESTIMONIALS</h2>
          <div className="title-line"></div>
          </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
                <div className="quote-container">
                  <FaQuoteLeft className="quote-left" />
                  <p className="testimonial-text">{testimonial.text}</p>
                  <FaQuoteRight className="quote-right" />
                </div>
                                                                               <div className="testimonial-author">
                          <h3 className="author-name">{testimonial.name} :- <span>{testimonial.position}</span></h3>
                        </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsComponent;