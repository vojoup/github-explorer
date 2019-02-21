import { connect } from 'react-redux';
import { getRepoForUserByName } from '../../actions/github.actions';
import ReposeList from './repos-list';

const mapStateToProps = state => ({
  repos: state.repos,
});

const mapDispatchToProps = dispatch => ({
  getRepoById: (user, repoName) =>
    dispatch(getRepoForUserByName(user, repoName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposeList);
