import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getMinistries } from '../../api/ministryData';
import { newMember, updateMember } from '../../api/volunteerData';

const initialState = {
  first_name: '',
  last_name: '',
  gender: '',
  age: '',
  number: '',
  email: '',
};

function VolunteerForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
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
      updateMember(formInput)
        .then(() => router.push('/profile'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      newMember(payload).then(({ name }) => {
        const patchPayloadFBK = { firebaseKey: name };
        updateMember(patchPayloadFBK).then(() => {
          router.push(`/profile/${name}`);
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'New'} Volunteer Form</h2>

      {/* FIRST NAME  */}
      <FloatingLabel controlId="floatingInput1" label="First Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter First Name"
          name="first_name"
          value={formInput.first_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* LAST NAME  */}
      <FloatingLabel controlId="floatingInput3" label="Last Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Last Name"
          name="last_name"
          value={formInput.last_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Ministry  */}
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

      {/* AGE */}
      <FloatingLabel controlId="floatingInput3" label="Age" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Age"
          name="age"
          value={formInput.age}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Email */}
      <FloatingLabel controlId="floatingInput3" label="Email" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Email"
          name="email"
          value={formInput.email}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* NUMBER */}
      <FloatingLabel controlId="floatingInput3" label="Number" className="mb-3">
        <Form.Control
          type="text"
          placeholder="number"
          name="number"
          value={formInput.number}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Submit'} Form</Button>
    </Form>
  );
}

VolunteerForm.propTypes = {
  obj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    age: PropTypes.string,
    email: PropTypes.string,
    number: PropTypes.string,
    ministry_id: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

VolunteerForm.defaultProps = {
  obj: initialState,
};

export default VolunteerForm;
