import { connect } from 'react-redux';
import EditForm from '../components/EditForm';
import { createAndSaveUser } from '../store/actions';

const mapStateToProps = ({ users: { usersData, editId = 0 } }) => ({
  editId,
  users: usersData,
});

const mapDispatchToProps = (dispatch) => ({
  onSave: (id, userData) => dispatch(createAndSaveUser(id, userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
