import React from 'react';
import { Button } from 'react-bootstrap';

export default function give() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <div>   <h1>Give</h1>
        <p>Welcome to our church community! We are grateful for your interest in supporting our mission and vision to serve and uplift our community. Your giving plays a vital role in allowing us to continue our work and reach more people with our message of hope and love.
          <div />
          By giving to our church, you are contributing to the growth and development of our ministries, programs, and services that benefit those in need. Your donation helps us to provide support and resources to those who may be struggling, and it also helps us to maintain our facilities and outreach efforts.

        </p>
      </div>
      <Button className="button" href="/giving/newGift">Give</Button>
    </div>
  );
}
