import { BsBuilding } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoConstructOutline } from 'react-icons/io5';

const StatsSection = () => {
  return (
    <div className="stats-wrapper">
      <div className="stats-section">
        <div className="stat-item">
          <BsBuilding className="stat-icon" />
          <div className="stat-content">
            <div className="stat-number">345</div>
            <div className="stat-label">PROJECTS</div>
          </div>
        </div>

        <div className="stat-item">
          <BiTime className="stat-icon" />
          <div className="stat-content">
            <div className="stat-number">22</div>
            <div className="stat-label">YEARS OF EXPERIENCE</div>
          </div>
        </div>

        <div className="stat-item">
          <HiOutlineDocumentText className="stat-icon" />
          <div className="stat-content">
            <div className="stat-number">413</div>
            <div className="stat-label">QUALIFIED STAFF</div>
          </div>
        </div>

        <div className="stat-item">
          <IoConstructOutline className="stat-icon" />
          <div className="stat-content">
            <div className="stat-number">4078</div>
            <div className="stat-label">MACHINERIES</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;