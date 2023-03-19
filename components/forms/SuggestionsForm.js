import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { newSuggestions, updateSuggestions } from '../../api/suggestionData';
import { getMinistries } from '../../api/ministryData';
import { useAuth } from '../../utils/context/authContext';

const initialStateBF = {
  first_name: '',
  last_name: '',
  description: '',
  ministry: '',
};

export default function SuggestionsForm({ obj }) {
  const [formInput, setFormInput] = useState(initialStateBF);
  const [ministries, setMinistries] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getMinistries().then(setMinistries);
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateSuggestions(formInput)
        .then(() => router.push('/suggestion'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      newSuggestions(payload).then(({ name }) => {
        const patchPayloadFBK = { firebaseKey: name };
        updateSuggestions(patchPayloadFBK).then(() => {
          router.push('/suggestion');
        });
      });
    }
  };

  return (
    <div className="board-form-container">
      <Head><title>{obj.firebaseKey ? `Update ${obj.first_name}'s Suggestion` : 'Create Suggestion'}</title></Head>

      <Form onSubmit={handleSubmit} className="text-color-drkblu">
        <h2 className="mt-5 text-center">{obj.firebaseKey ? `Update ${obj.first_name}` : 'Suggestions Box'}</h2>
        <div className="mt-5" />
        <div className=""> First Name</div>
        <FloatingLabel
          controlId="floatingInput1"
          label="Enter Your First Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Enter Your First Name"
            name="first_name"
            value={formInput.first_name}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <div className=""> Last Name</div>
        <FloatingLabel
          controlId="floatingInput1"
          label="Enter Your Last Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Enter Your Last Name"
            name="last_name"
            value={formInput.last_name}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <div className="">Suggestion</div>
        <FloatingLabel
          controlId="floatingInput2"
          label="Enter A Brief Description Of Your Suggestion"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Suggestion"
            style={{ height: '100px' }}
            name="description"
            value={formInput.description}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <div className="">Ministry</div>
        <FloatingLabel controlId="floatingSelect" label="Ministry">
          <Form.Select
            aria-label="Ministry"
            name="ministry_id"
            onChange={handleChange}
            className="mb-3"
            value={formInput.ministry_id}
            required
          >
            <option value="">Select a ministry</option>
            {
            ministries.map((ministry) => (
              <option
                key={ministry.firebaseKey}
                value={ministry.firebaseKey}
              >
                {ministry.ministry_name}
              </option>
            ))
          }
          </Form.Select>
        </FloatingLabel>
        <Button type="submit" variant="outline-dark" className="m-2 text-color-drkblu">{obj.firebaseKey ? 'Update' : 'Submit Suggestion'}</Button>
      </Form>
    </div>
  );
}

SuggestionsForm.propTypes = {
  obj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    firebaseKey: PropTypes.string,
    description: PropTypes.string,
    ministry: PropTypes.string,
  }),
};

SuggestionsForm.defaultProps = {
  obj: initialStateBF,
};
