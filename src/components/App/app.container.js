import { connect } from 'react-redux';

import { getAllReposForUser } from '../../actions/github.actions';
import App from './App';

const mapStateToProps = state => ({
  repos: state.repos,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  getRepos: user => dispatch(getAllReposForUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
