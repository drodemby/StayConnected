import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import SugCard from '../components/SugCard';
import { useAuth } from '../utils/context/authContext';
import { getSuggestions } from '../api/suggestionData';

export default function SuggestionPage() {
  const [suggestion, setSuggestion] = useState([]);

  const { user } = useAuth();

  const getAllSuggestions = () => {
    getSuggestions(user.uid).then(setSuggestion);
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
        {suggestion.map((suggestions) => (
          <SugCard key={suggestions.firebaseKey} sugObj={suggestion} onUpdate={getAllSuggestions} />
        ))}
      </div>

    </div>
  );
}
