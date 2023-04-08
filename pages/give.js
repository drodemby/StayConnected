import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import GivingForm from '../components/forms/GivingForm';

export default function Give() {
  const [open, setOpen] = useState(false);
  const [buttonName, setButtonName] = useState('Give');
  const handleFormToggle = () => {
    if (buttonName === 'Give') {
      setOpen(true);
      setButtonName('Close Form');
    } else {
      setOpen(false);
      setButtonName('Give');
    }
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
    >
      <div>   <h1>Give</h1>
        <p>Welcome to our church community! We are grateful for your interest in supporting our mission and vision to serve and uplift our community. Your giving plays a vital role in allowing us to continue our work and reach more people with our message of hope and love.
          <div />
          By giving to our church, you are contributing to the growth and development of our ministries, programs, and services that benefit those in need. Your donation helps us to provide support and resources to those who may be struggling, and it also helps us to maintain our facilities and outreach efforts.

        </p>
      </div>
      <Button
        className="button"
        onClick={handleFormToggle}
        style={{
          // height: '0px',
          padding: '0 auto',
          maxWidth: '300px',
          margin: '0 auto',
        }}
      >{buttonName}
      </Button>
      {open ? <GivingForm /> : ''}
    </div>
  );
}
