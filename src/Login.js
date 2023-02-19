import React from 'react';


function Login() {
  return (
    <div className='login-container'>
      <h1 className='login-header'>Login</h1>
      <form className='login-form'>
        <div className='form-group'>
          <label htmlFor='username' className='form-label'>Username</label>
          <input type='text' id='username' className='form-input' placeholder='Enter your username' required />
        </div>
        <div className='form-group'>
          <label htmlFor='password' className='form-label'>Password</label>
          <input type='password' id='password' className='form-input' placeholder='Enter your password' required />
        </div>
        <button type='submit' className='form-button'>Login</button>
      </form>
    </div>
  );
}

export default Login;
