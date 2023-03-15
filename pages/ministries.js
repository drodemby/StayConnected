import React, { useEffect, useState } from 'react';
import { getMinistries } from '../api/ministryData';
import MinistryCard from '../components/MinistryCard';

export default function Ministry() {
  const [ministries, setMinistries] = useState([]);

  const showAllMinistries = () => {
    getMinistries().then(setMinistries);
  };

  useEffect(() => {
    showAllMinistries();
  }, []);
  return (
    <div className="public-card-container, d-flex flex-wrap">
      {ministries.map((mini) => (
        <MinistryCard key={mini.firebaseKey} ministryObj={mini} onUpdate={showAllMinistries} />
      ))}
    </div>
  );
}
