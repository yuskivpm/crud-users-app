import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import './UserCard.scss';

const footer = (id, onEdit, onDelete) => (
  <>
    <Button
      label="Edit"
      className="footer-button p-button-rounded p-button-success"
      icon="pi pi-user-edit"
      onClick={() => onEdit(id)}
    />
    <Button
      label="Delete"
      className="footer-button p-button-rounded p-button-danger"
      icon="pi pi-trash"
      onClick={() => onDelete(id)}
    />
  </>
);

const header = (id) => (
  <span>
    ID:
    {id}
  </span>
);

const UserCard = ({ user: { id, name, surname, desc }, onEdit, onDelete }) => (
  <Card className="user-card" footer={footer(id, onEdit, onDelete)} header={header(id)}>
    <div className="p-fluid">
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">Name: </span>
        <InputText value={name} readOnly />
      </div>

      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">Surname: </span>
        <InputText value={surname} readOnly />
      </div>

      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">Description: </span>
        <InputText value={desc} readOnly />
      </div>
    </div>
  </Card>
);

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    surname: PropTypes.string,
    desc: PropTypes.string,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserCard;
