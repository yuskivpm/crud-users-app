import { connect } from 'react-redux';
import UsersList from '../components/UsersList';
import { changeLocation, removeUser } from '../store/actions';
import { EDIT_USER_LOCATION } from '../utils/consts';

const mapStateToProps = ({ users: { usersOnPage, curPage, usersData = [] } }) => ({ usersOnPage, curPage, usersData });

const mapDispatchToProps = (dispatch) => ({
  onEdit: (id) => dispatch(changeLocation({ location: EDIT_USER_LOCATION, id })),
  onDelete: (id) => dispatch(removeUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
