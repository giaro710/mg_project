import React from 'react';

const Login2 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" />
        <input type="password" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login2;
