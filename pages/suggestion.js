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
    <div
      className="text-center d-flex flex-column justify-content-center "
    >
      <h1>We want to hear from you!</h1>
      <p>
        As members of our church, we are all responsible for ensuring that our community is vibrant, welcoming, and fulfilling. To achieve this, we must be open to hearing suggestions from everyone in our congregation. Your unique perspective and experiences can help us identify areas for improvement and opportunities to better serve our community.
      </p>
      <p>
        Whether it is a new program, event, or service, we want to hear your ideas on how we can make our church even better. So please do not hesitate to share your thoughts with us. Together, we can continue to strengthen our church and make it a place where everyone feels loved and valued.
      </p>
      <Link href="/suggestions/new" passHref>
        <Button className="button">New Suggestion </Button>
      </Link>
      <br />
      <div className="d-flex flex-wrap">
        {suggestions.map((suggestion) => (
          <SugCard key={suggestion.firebaseKey} sugObj={suggestion} onUpdate={getAllSuggestions} />
        ))}
      </div>

    </div>
  );
}
