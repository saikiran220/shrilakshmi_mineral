import graniteImg from '../../assets/images/granite.png';
import quartzImg from '../../assets/images/quartz.png';
import marbleImg from '../../assets/images/marble.png';
import sandstoneImg from '../../assets/images/sandstone.png';
import StatsSection from './StatsSection';

const OurProductsComponent = () => {
  return (
    <section className="products-section">
      <div className="products-container">
        <h1>Our Products</h1>
        <p className="products-description">
          Shri Lakshmi Minerals is a trusted name in the natural stone industry, known for its
          commitment to excellence, quality, and innovation. We offer a wide variety of natural stones
          including Granite, Quartz, Marble, and Sandstone — perfect for countertops, flooring, wall
          cladding, and architectural applications.
        </p>

        <div className="product-cards">
          <div className="product-card">
            <div className="card-content">
              <h3>Granite</h3>
              <p>Durable, elegant, & naturally beautiful — ideal for countertops, flooring, and exterior applications.</p>
            </div>
            <div className="card-image">
              <img src={graniteImg} alt="Granite" />
            </div>
          </div>

          <div className="product-card">
            <div className="card-content">
              <h3>Quartz</h3>
              <p>Engineered for perfection — a modern alternative to marble with superior strength and consistency.</p>
            </div>
            <div className="card-image">
              <img src={quartzImg} alt="Quartz" />
            </div>
          </div>

          <div className="product-card">
            <div className="card-content">
              <h3>Marble</h3>
              <p>Classic and luxurious, ideal for premium interior designs and sculptures</p>
            </div>
            <div className="card-image">
              <img src={marbleImg} alt="Marble" />
            </div>
          </div>

          <div className="product-card">
            <div className="card-content">
              <h3>Sandstone & Limestone</h3>
              <p>Rustic and timeless — perfect for outdoor landscaping, garden paths, and traditional structures</p>
            </div>
            <div className="card-image">
              <img src={sandstoneImg} alt="Sandstone" />
            </div>
          </div>
        </div>
      </div>

      <StatsSection />
    </section>
  );
};

export default OurProductsComponent;
