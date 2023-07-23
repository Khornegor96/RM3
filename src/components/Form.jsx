import React, { useState } from 'react';

function Form(props) {
  const [userData, setUserData] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.Login(userData);
  };

  return (
    <div className='Log'>
      <form onSubmit={handleSubmit}>
        <label className='Email'>
          Email
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
        </label>
        <br />
        <label className='Password'>
          Password
          <input type="password" name="password" value={userData.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form; 