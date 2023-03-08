import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../component/navbar.css';
import Cookies from 'js-cookie';



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
            console.log(response)
            if(response.status === 401){
              alert(' incorrect userId or password')
              navigate('/')
            }
            else{
              
              const data = await response.json();
  
              // set cookie with JWT token
              Cookies.set('jwt', data.token);

              navigate("/home");
            }
          } catch (err) {

            console.log('error ---->',err);
            navigate('/')
          }
      
     
    }

  const HandleSignUp =()=>{
    navigate('/signup');

} 
  return (
    (
        <div class='login'>

            
        <form onSubmit={SubmitForm}>
          <label id ="username">
            UserID:
            <input type="text" value={userId} onChange={e => setUserId(e.target.value)} />
          </label>
          <br />
          <label id ="password">
            Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit" >Log In</button>
          <button onClick={HandleSignUp}>signup</button>
        </form>
        </div>
      )
  )
}

export default Login;