import miningBg from '../../assets/images/mining.png';

const CompetitorComponent = () => {
  return (
    <section className="competitor-section" style={{ backgroundImage: `url(${miningBg})` }}>
      <div className="competitor-overlay"></div>
      <div className="competitor-container">
        <h2>WHAT DOES WE DIFFER FROM<br />THE COMPETITORS</h2>
        <p className="competitor-description">
          Sri lakshmi minerals strives for continual improvement in safety, production, quality, profit and
          continued community service to the benefit of our stakeholders, employees, customers and
          surrounding communities.
        </p>

        <div className="competitor-features">
          <div className="feature-item">
            <h3>Understanding Customer<br />Expectations</h3>
            <p>
              Understanding your wish to complete a project on time and
              on budget and achieving that is our commitment.
            </p>
          </div>

          <div className="feature-item">
            <h3>Well-Defined<br />Management System</h3>
            <p>
              We have a proven management system that prevents dysfunction
              and provides for efficient execution.
            </p>
          </div>

          <div className="feature-item">
            <h3>Stakeholder<br />Commitment</h3>
            <p>
              Our motto is success through partnership. Becoming a true partner &
              understanding the partnership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitorComponent;
