import { connect } from 'react-redux';

import User from './user';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
