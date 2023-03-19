import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewMemberDetails } from '../../api/mergedData';
// import { useAuth } from '../../utils/context/authContext';
// import ViewYourPins from '../../components/ViewYourPins';

export default function ViewVolunteerDetails() {
  const [volDetails, setVolDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewMemberDetails(firebaseKey).then(setVolDetails);
  }, [firebaseKey]);

  return (
    <div className="BD-container">
      <div className="BD-detail-cont">
        <div className="BD-name-cont"><h2 className="BD-name">{volDetails.first_name}{volDetails.last_name}</h2></div>
        <div className="BD-desc-cont"><h5 className="BD-description">{volDetails.number}</h5></div>
        <div className="BD-edit-cont">
          {volDetails.age}
        </div>
        <div className="BD-edit-cont">
          {volDetails.email}
        </div>
        <div>
          {volDetails.ministryObj?.ministry_name}
        </div>
      </div>
    </div>
  );
}
