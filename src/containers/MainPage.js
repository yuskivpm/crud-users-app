import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
import { ADD_USER_LOCATION } from '../utils/consts';
import { fetchUsersData, changeLocation } from '../store/actions';

const mapStateToProps = ({ users: { tableLoaded, error, location } }) => ({
  tableLoaded,
  error,
  location,
});

const mapDispatchToProps = (dispatch) => ({
  onNeedFetch: () => dispatch(fetchUsersData()),
  onAddUser: () => dispatch(changeLocation({ location: ADD_USER_LOCATION })),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
