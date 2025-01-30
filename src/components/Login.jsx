import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  function handleLogin() {
    axios.post('http://localhost:5000/api/auth/login', user)
      .then(response => {
        localStorage.setItem('token', response.data.token); // Store the JWT token
        console.log('Login successful:', response.data);
        // You can now redirect the user to the homepage or a protected route
      })
      .catch(error => {
        console.error('Error logging in:', error.response?.data?.msg || error.message);
      });
  }

  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='shadow-md p-10 bg-white w-[80%] md:w-[30%] font-semibold'>
        <h2 className='text-xl font-bold mb-4 text-center'>Login Page</h2>
        <dl>
          <dt>Email Address</dt>
          <dd>
            <input 
              type="text" 
              name="email" 
              value={user.email} 
              onChange={(e) => setUser(prevState => ({ ...prevState, email: e.target.value }))} 
              className='border p-1 w-full rounded-md border-gray-400' 
            />
          </dd>
          <dt className='mt-2'>Password</dt>
          <dd>
            <input 
              type="password" 
              name="password" 
              value={user.password} 
              onChange={(e) => setUser(prevState => ({ ...prevState, password: e.target.value }))} 
              className='border p-1 w-full rounded-md border-gray-400' 
            />
          </dd>
        </dl>
        <button className='bg-green-600 w-full text-white p-1.5 rounded-md mt-2' onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
