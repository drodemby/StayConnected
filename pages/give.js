import React from 'react';
import { Button } from 'react-bootstrap';

export default function give() {
  return (
    <div>
      <p>Click Here To Give</p>
      <Button href="/giving/newGift">give</Button>
    </div>
  );
}
