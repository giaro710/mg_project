import React from 'react';
import './LogOut.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { connect } from 'react-redux';
import { logOutAction } from '../../redux/actions';

const LogOut = ({ logOutAction, username, authToken }) => {
  const handleClick = () => {
    // console.log('--------------------');
    // console.log(username);
    // console.log(authToken);
    // console.log('--------------------');

    logOutAction(username, authToken);
  };

  return (
    <div className="logout" onClick={handleClick}>
      <ExitToAppIcon />
      <p>Log Out</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  console.log('--------------------');
  console.log(state);
  console.log(state.auth.username);
  console.log(state.auth.token);
  console.log('--------------------');
  return {
    username: state.auth.username,
    authToken: state.auth.token,
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps, { logOutAction })(LogOut);
