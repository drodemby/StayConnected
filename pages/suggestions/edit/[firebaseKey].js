import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleSuggestion } from '../../../api/suggestionData';
import SuggestionsForm from '../../../components/forms/SuggestionsForm';

export default function EditSuggestions() {
  const [editSuggestion, setEditSuggestion] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    console.warn(firebaseKey);
    getSingleSuggestion(firebaseKey).then(setEditSuggestion);
  }, [firebaseKey]);

  return (
    <SuggestionsForm obj={editSuggestion} />
  );
}
