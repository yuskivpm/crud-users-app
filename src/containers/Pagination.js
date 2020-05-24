import { connect } from 'react-redux';
import Pagination from '../components/Pagination';
import { changePage } from '../store/actions';

const mapStateToProps = ({ users: { usersOnPage, curPage, usersData = [] } }) => ({
  usersOnPage,
  curPage,
  usersCount: usersData.length,
});

const mapDispatchToProps = (dispatch) => ({
  onPageChange: (curPage) => dispatch(changePage(curPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
