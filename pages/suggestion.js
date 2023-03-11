import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import SugCard from '../components/SugCard';
import { useAuth } from '../utils/context/authContext';
import { getSuggestions } from '../api/suggestionData';

export default function SuggestionPage() {
  const [suggestions, setSuggestions] = useState([]);

  const { user } = useAuth();

  const getAllSuggestions = () => {
    getSuggestions(user.uid).then(setSuggestions);
  };

  useEffect(() => {
    getAllSuggestions();
  }, []);

  return (
    <div>
      <Link href="/suggestions/new" passHref>
        <Button> New Suggestion </Button>
      </Link>

      <div className="d-flex flex-wrap">
        {suggestions.map((suggestion) => (
          <SugCard key={suggestion.firebaseKey} sugObj={suggestion} onUpdate={getAllSuggestions} />
        ))}
      </div>

    </div>
  );
}
