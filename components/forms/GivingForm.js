import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import Head from 'next/head';
import { newGift, updateGift } from '../../api/givingData';
import { useAuth } from '../../utils/context/authContext';

const initialStateBF = {
  tithe: '',
  offering: '',
};

export default function GivingForm() {
  const [formInput, setFormInput] = useState(initialStateBF);
  const router = useRouter();
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: parseInt(value, 10),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formInput, uid: user.uid };
    newGift(payload).then(({ name }) => {
      const patchPayloadFBK = { firebaseKey: name };
      updateGift(patchPayloadFBK).then(() => {
        router.push('/givingStatement');
      });
    });
  };

  return (
    <div className="board-form-container">
      <Head><title>{`${user.displayName}'s Giving Statement`}</title></Head>

      <Form onSubmit={handleSubmit} className="text-color-drkblu">
        <div className="mt-5" />
        <div className=""> Tithe</div>
        <FloatingLabel
          controlId="floatingInput1"
          label="Enter Your Tithe Amount"
          className="mb-3"
        >
          <Form.Control
            type="number"
            placeholder="Enter Your Tithe Amount"
            name="tithe"
            value={formInput.tithe}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <div className=""> Offering</div>
        <FloatingLabel
          controlId="floatingInput1"
          label="Enter Your Offering Amount"
          className="mb-3"
        >
          <Form.Control
            type="number"
            placeholder="Enter Your Offering Amount"
            name="offering"
            value={formInput.offering}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <Button type="submit" variant="outline-dark" className="m-2 text-color-drkblu"> Give</Button>
      </Form>
    </div>
  );
}
