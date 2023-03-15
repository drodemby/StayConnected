import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';

export default function MinistryCard({ ministryObj }) {
  const { user } = useAuth();
  return (
    <div>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Body>
          <Card.Title>{ministryObj.ministry_name}</Card.Title>
          <Card.Body>{ministryObj.description}</Card.Body>
        </Card.Body>
        <Link href={`/ministry/${ministryObj.firebaseKey}`} passHref>
          <Button variant="outline-dark" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/ministry/edit/${ministryObj.firebaseKey}`} passHref>
          {ministryObj.uid === user.uid ? (<Button variant="outline-dark" className="m-2">EDIT</Button>) : '' }
        </Link>
      </Card>
    </div>
  );
}

MinistryCard.propTypes = {
  ministryObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
    ministry_name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
