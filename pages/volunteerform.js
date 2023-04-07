import React, { useEffect, useState } from 'react';
import VolunteerCard from '../components/VolunteerCard';
import { useAuth } from '../utils/context/authContext';
import { getMembers } from '../api/volunteerData';

export default function Volunteerform() {
  const [forms, SetForms] = useState([]);

  const { user } = useAuth();

  const ShowUserForms = () => {
    getMembers(user.uid).then(SetForms);
  };

  useEffect(() => {
    ShowUserForms();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {forms.map((form) => (
        <VolunteerCard key={form.firebaseKey} volunteerObj={form} onUpdate={ShowUserForms} />
      ))}
    </div>

  );
}
