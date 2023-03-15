import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSingleMember } from '../../api/volunteerData';
import VolunteerCard from '../../components/VolunteerCard';

export default function Profile() {
  const router = useRouter();
  const { firebaseKey } = router.query;
  const [volunteer, setVolunteer] = useState({});

  useEffect(() => {
    getSingleMember(firebaseKey).then(setVolunteer);
  }, [firebaseKey]);
  console.warn(volunteer);

  return (
    <>
      <VolunteerCard volunteerObj={volunteer} />
    </>
  );
}
