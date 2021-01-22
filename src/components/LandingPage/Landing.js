import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { connect } from 'react-redux';
import { fetchQualcosa } from '../../redux/actions';

const Landing = ({ fetchQualcosa, username, authToken }) => {
  useEffect(() => {
    fetchQualcosa(username, authToken);
  }, []);

  return (
    <div className="landing">
      <h1>Landing Page</h1>
      <p>This is the landing page</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, quod.
        Tempora delectus voluptas in sint, consequuntur explicabo architecto
        totam et exercitationem quod illum! Quo magnam suscipit itaque quae, ex
        sit?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, quod.
        Tempora delectus voluptas in sint, consequuntur explicabo architecto
        totam et exercitationem quod illum! Quo magnam suscipit itaque quae, ex
        sit?
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    authToken: state.auth.token,
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps, { fetchQualcosa })(Landing);
