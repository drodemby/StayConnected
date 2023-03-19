import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleMember } from '../../../api/volunteerData';
import VolunteerForm from '../../../components/forms/VolunteerForm';

export default function EditVolunteer() {
  const [editVolunteer, setEditVolunteer] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  useEffect(() => {
    getSingleMember(firebaseKey).then(setEditVolunteer);
  }, [firebaseKey]);

  return (
    <VolunteerForm obj={editVolunteer} />
  );
}
