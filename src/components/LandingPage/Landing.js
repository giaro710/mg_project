import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <p>
        This is the landing page. I write down this thing just to make the space
        not so empty
      </p>
      <br />
      <br />
      <br />
      <br />
      <Link to="/login">Vai al Login</Link>
    </div>
  );
};

export default Landing;
