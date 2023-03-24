import React, { useEffect, useState } from 'react';
import { getGivingStatement } from '../api/givingData';
import DonationStatement from '../components/DonationStatement';
import { useAuth } from '../utils/context/authContext';

export default function Ministry() {
  const [donation, setDonation] = useState({});
  const { user } = useAuth();

  const showDonationStatement = () => {
    getGivingStatement(user.uid).then((gift) => {
      const curGift = gift.reduce((previousVal, currentVal) => ({
        tithe: previousVal.tithe + currentVal.tithe,
        offering: previousVal.offering + currentVal.offering,
      }));
      setDonation(curGift);
    });
  };

  useEffect(() => {
    showDonationStatement();
  }, []);
  return (
    <div className="public-card-container, d-flex flex-wrap">
      <DonationStatement key={donation.tithe} donationObj={donation} onUpdate={showDonationStatement} />
    </div>
  );
}
