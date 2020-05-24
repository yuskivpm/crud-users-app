/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './EditForm.scss';

const EMPTY_USER = { name: '', surname: '', desc: '' };

const getUserById = (users, editId) => users.find(({ id }) => id === editId);

const EditForm = ({ users, editId, onSave }) => {
  const defUser = (editId && getUserById(users, editId)) || EMPTY_USER;
  const [user, setUser] = useState(defUser);
  const { name, surname, desc } = user;
  const handleSubmit = () => {
    const userData = editId
      ? JSON.stringify(user)
      : Object.entries(user).reduce((userForm, [key, value]) => {
          userForm.append(key, value);
          return userForm;
        }, new FormData());
    onSave(editId, userData);
  };
  const handleChange = (key, value) => setUser({ ...user, [key]: value });
  return (
    <div id="editForm">
      <span className="p-float-label">
        <InputText
          id="name"
          name="name"
          value={name}
          type="text"
          size="30"
          required
          onChange={({ target: { value } }) => handleChange('name', value)}
        />
        <label htmlFor="name">Name</label>
      </span>
      <br />

      <span className="p-float-label">
        <InputText
          id="surname"
          name="surname"
          value={surname}
          type="text"
          size="30"
          required
          onChange={({ target: { value } }) => handleChange('surname', value)}
        />
        <label htmlFor="surname">Surname</label>
      </span>
      <br />

      <span className="p-float-label">
        <InputText
          id="desc"
          name="desc"
          value={desc}
          type="text"
          size="30"
          required
          onChange={({ target: { value } }) => handleChange('desc', value)}
        />
        <label htmlFor="desc">Description</label>
      </span>
      <br />

      <Button label="Save" className="p-button-rounded p-button-success" icon="pi pi-check" onClick={handleSubmit} />
    </div>
  );
};

EditForm.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      surname: PropTypes.string,
      desc: PropTypes.string,
    })
  ),
  editId: PropTypes.number,
  onSave: PropTypes.func.isRequired,
};

EditForm.defaultProps = {
  users: [],
  editId: 0,
};

export default EditForm;
