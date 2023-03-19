import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSuggestions } from '../api/suggestionData';
import { useAuth } from '../utils/context/authContext';

function SugCard({ sugObj, onUpdate }) {
  const { user } = useAuth();
  const deleteSuggestion = () => {
    if (window.confirm(`Delete ${sugObj.first_name}?`)) {
      deleteSuggestions(sugObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <div>
      <Card>
        <Card.Body>{sugObj.description}</Card.Body>
        <Card.Body>{sugObj.ministry_id}</Card.Body>
        <Link href={`/suggestions/edit/${sugObj.firebaseKey}`} passHref>
          {sugObj.uid === user.uid ? (<Button variant="outline-dark" className="m-2">EDIT</Button>) : '' }
        </Link>
        <>
          {sugObj.uid === user.uid ? (
            <Button variant="outline-dark" className="m-2" onClick={deleteSuggestion}>
              DELETE
            </Button>
          )
            : ''}
        </>
      </Card>
    </div>
  );
}

SugCard.propTypes = {
  sugObj: PropTypes.shape({
    description: PropTypes.string,
    first_name: PropTypes.string,
    firebaseKey: PropTypes.string,
    ministry_id: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.isRequired,
};

export default SugCard;
