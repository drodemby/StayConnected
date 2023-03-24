import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
// import { useAuth } from '../utils/context/authContext';

export default function DonationStatement({ donationObj }) {
  // const { user } = useAuth();

  return (
    <div>
      <Card>
        <Card.Title> Your Giving Statement</Card.Title>
        <Card.Body>
          <h3>Tithes: {donationObj.tithe}</h3>
          <h3>Offering: {donationObj.offering}</h3>
        </Card.Body>
      </Card>
    </div>
  );
}

DonationStatement.propTypes = {
  donationObj: PropTypes.shape({
    tithe: PropTypes.number,
    offering: PropTypes.number,
    uid: PropTypes.string,
  }).isRequired,
};
