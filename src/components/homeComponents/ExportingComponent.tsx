import { Link } from 'react-router-dom';

const ExportingComponent = () => {
  return (
    <section className="exporting-section">
      <div className="container">
        <div className="export-content">
          <div className="export-heading">
            <h2>
              NOW EXPORTING <br />
              TO 25+ COUNTRIES
              WORLDWIDE! 
              GET IN TOUCH  
              FOR BULK ORDERS &
              QUOTATIONS.
            </h2>
          </div>
          <div className="export-description">
            <div className="red-line"></div>
            <p>
              At Shri Lakshmi Minerals, we specialize in supplying
              high-quality Granite, Quartz, Marble, and other natural
              stones for both residential and commercial projects.
              With a commitment to quality and customer
              satisfaction, we bring you the finest
              selection of materials, sourced directly from the best
              quarries in India.
            </p>
            <Link to="/contact" className="click-here-btn">
              Click Here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportingComponent;