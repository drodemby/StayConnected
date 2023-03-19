import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteMember } from '../api/volunteerData';
import { useAuth } from '../utils/context/authContext';

function VolunteerCard({ volunteerObj, onUpdate }) {
  const { user } = useAuth();
  const deleteUserForm = () => {
    if (window.confirm(`Delete ${volunteerObj.first_name}'s form?`)) {
      deleteMember(volunteerObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <div>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Body>
          <Card.Body>{volunteerObj.first_name}</Card.Body>
        </Card.Body>
        <Link href={`/volunteer/${volunteerObj.firebaseKey}`} passHref>
          <Button variant="outline-dark" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/volunteer/edit/${volunteerObj.firebaseKey}`} passHref>
          {volunteerObj.uid === user.uid ? (<Button variant="outline-dark" className="m-2">EDIT</Button>) : '' }
        </Link>
        <>
          {volunteerObj.uid === user.uid ? (
            <Button variant="outline-dark" className="m-2" onClick={deleteUserForm}>
              DELETE
            </Button>
          )
            : ''}
        </>
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
    age: PropTypes.string,
    email: PropTypes.string,
    number: PropTypes.string,
    ministry_id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.isRequired,
};

export default VolunteerCard;
