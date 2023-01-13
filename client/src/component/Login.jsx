import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



 function Login() {
    const [userId, setUserId] =useState('');
    const [password, setPassword] =useState('');
    const navigate = useNavigate();

    const SubmitForm =async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/api/v1/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ userId, password })
            });
            if(response.status === 401){
              alert(' incorrect userId or password')
              navigate('/')
            }
            else{
              
              const data = await response.json();
              localStorage.setItem('jwt', data.token);
              navigate("/home");
            }
          } catch (err) {

            console.log('error ---->',err);
            navigate('/')
          }

    }


  return (
    (
        <div>

            
        <form onSubmit={SubmitForm}>
          <label>
            UserID
            <input type="text" value={userId} onChange={e => setUserId(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit" >Log In</button>
        </form>
        </div>
      )
  )
}

export default Login;