/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { viewMinistryDetails } from '../../api/mergedData';
import { useAuth } from '../../utils/context/authContext';

export default function ViewMinistry() {
  const [ministryDetails, setMinistryDetails] = useState({});
  const router = useRouter();
  const { user } = useAuth();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewMinistryDetails(firebaseKey).then(setMinistryDetails);
  }, [firebaseKey]);

  return (
    <div className="BD-container">
      <div className="BD-detail-cont-bg">
        <div className="BD-detail-cont">
          <img src={ministryDetails.image} alt="ministry_image" />
          {/* <div className="BD-photo-cont"><img className="BD-photo" src={boardDetails.image} alt={boardDetails.name} /></div> */}
          <div className="BD-name-cont"><h2 className="BD-name">{ministryDetails.ministry_name}</h2></div>
          <div className="BD-desc-cont"><h5 className="BD-description">{ministryDetails.description}</h5></div>
          <div className="BD-edit-cont">
            <Link href={`edit/${ministryDetails.firebaseKey}`} passHref>
              {ministryDetails.uid === user.uid ? (<Button variant="dark" className="m-2">Edit {ministryDetails.name} </Button>) : '' }
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
