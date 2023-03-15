import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';

export default function VolunteerCard({ volunteerObj }) {
  const { user } = useAuth();
  return (
    <div>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Body>
          <Card.Title>{volunteerObj.first_name} {volunteerObj.last_name}</Card.Title>
          <Card.Body>{volunteerObj.description}</Card.Body>
        </Card.Body>
        <Link href={`/volunteer/${volunteerObj.firebaseKey}`} passHref>
          <Button variant="outline-dark" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/volunteer/edit/${volunteerObj.firebaseKey}`} passHref>
          {volunteerObj.uid === user.uid ? (<Button variant="outline-dark" className="m-2">EDIT</Button>) : '' }
        </Link>
      </Card>
    </div>
  );
}

VolunteerCard.propTypes = {
  volunteerObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
