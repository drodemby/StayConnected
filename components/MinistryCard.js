import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteMinistryMembers } from '../api/mergedData';
import { useAuth } from '../utils/context/authContext';

export default function MinistryCard({ ministryObj, onUpdate }) {
  const { user } = useAuth();
  const deleteThisMinistry = () => {
    if (window.confirm(`Delete ${ministryObj.name}?`)) {
      deleteMinistryMembers(ministryObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <div>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={ministryObj.image} alt={ministryObj.name} style={{ height: '400px' }} />
        <Card.Body>
          <Card.Title>{ministryObj.name}</Card.Title>
          <Card.Body>{ministryObj.description}</Card.Body>
        </Card.Body>
        <Link href={`/ministry/${ministryObj.firebaseKey}`} passHref>
          <Button variant="outline-dark" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/ministry/edit/${ministryObj.firebaseKey}`} passHref>
          {ministryObj.uid === user.uid ? (<Button variant="outline-dark" className="m-2">EDIT</Button>) : '' }
        </Link>
        <>
          {ministryObj.uid === user.uid ? (
            <Button variant="outline-dark" className="m-2" onClick={deleteThisMinistry}>
              DELETE
            </Button>
          )
            : ''}
        </>
      </Card>
    </div>
  );
}

MinistryCard.propTypes = {
  ministryObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
