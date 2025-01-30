import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  function handleSignUp() {
    axios.post('http://localhost:5000/api/auth/signup', user)
      .then(response => {
        console.log('SignUp successful:', response.data);
        // You can redirect the user to the login page after successful signup
      })
      .catch(error => {
        console.error('Error signing up:', error.response?.data?.msg || error.message);
      });
  }

  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='shadow-md p-10 bg-white w-[80%] md:w-[30%] font-semibold'>
        <h2 className='text-xl font-bold mb-4 text-center'>Sign Up Page</h2>
        <dl>
          <dt>Username</dt>
          <dd>
            <input 
              type="text" 
              name="username" 
              value={user.username} 
              onChange={(e) => setUser(prevState => ({ ...prevState, username: e.target.value }))} 
              className='border p-1 w-full rounded-md border-gray-400' 
            />
          </dd>
          <dt className='mt-2'>Email Address</dt>
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
        <button className='bg-green-600 w-full  text-white p-1.5 rounded-md mt-2' onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
