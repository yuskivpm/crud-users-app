import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import UsersList from '../containers/UsersList';
import Pagination from '../containers/Pagination';
import EditForm from '../containers/EditForm';
import './MainPage.scss';

const MainPage = ({ tableLoaded, error, onAddUser, location, onNeedFetch }) => {
  if (!tableLoaded) {
    useEffect(() => {
      if (tableLoaded === undefined) {
        onNeedFetch();
      }
    }, [tableLoaded]);
    return <p>Fetch users data</p>;
  }

  if (location) {
    return <EditForm />;
  }

  return (
    <div id="main-page">
      {error && (
        <div className="pi pi-exclamation-circle error-block">
          {error}
          <hr />
        </div>
      )}
      <div>
        <Button
          label="Add user"
          className="p-button-rounded p-button-success"
          icon="pi pi-user-plus"
          onClick={onAddUser}
        />
      </div>
      <hr />
      <UsersList />
      <Pagination />
    </div>
  );
};

MainPage.propTypes = {
  error: PropTypes.string,
  tableLoaded: PropTypes.bool,
  onNeedFetch: PropTypes.func.isRequired,
  onAddUser: PropTypes.func.isRequired,
  location: PropTypes.string,
};

MainPage.defaultProps = {
  tableLoaded: undefined,
  error: '',
  location: '',
};

export default MainPage;
