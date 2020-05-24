import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';

const UsersList = ({ usersOnPage, curPage, usersData, onEdit, onDelete }) => {
  const startIndex = curPage * usersOnPage;
  const lastIndex = startIndex + usersOnPage;
  return (
    <div className="users-list">
      {usersData
        .filter((item, index) => index >= startIndex && index < lastIndex)
        .map((user) => (
          <UserCard user={user} key={user.id} onEdit={onEdit} onDelete={onDelete} />
        ))}
    </div>
  );
};

UsersList.propTypes = {
  usersOnPage: PropTypes.number.isRequired,
  curPage: PropTypes.number,
  usersData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

UsersList.defaultProps = {
  curPage: 0,
};

export default UsersList;
