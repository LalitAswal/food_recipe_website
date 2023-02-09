import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import '../component/navbar.css';



 const SignUp = ()=>{
    const [id, setId ] = useState('');
    const [name, setName ] = useState('');
    const [user_id, setUserId] = useState('');
    const [ email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verify_password, setVPassword] = useState('');
    const navigate = useNavigate();


    const SubmitFom = async(e)=>{
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:4000/api/v1/signUp',{
                method:"POST",
                headers:{ 'Content-Type': 'application/json' },
                body:JSON.stringify({id,name,user_id,password,verify_password, email})
            });
            if(response.status === 200){
                alert('registered successfully')
                navigate('/')
            }
            
        } catch (error) {
            alert(error)
            navigate('/signup')
        }
    }

    // http://localhost:4000/api/v1/signUp
    

    return(
        <form  className='signup' onSubmit={SubmitFom}>
            <label id='Id'>
                 Id:
                <input type="text"  value ={id} onChange={ e=> setId(e.target.value) }></input>
            </label>
            <label id='Name'>
                 Name:
                <input type="text"  value ={name}  onChange={ e=> setName(e.target.value) }></input>
            </label>
            <label id='UserName'>
                UserName:
                <input type="text" value={user_id} onChange ={ e=> setUserId(e.target.value)}></input>
            </label>
            <label id='Email'>
                Email:
                <input type="text" value ={email}  onChange={ e=> setEmail(e.target.value)}></input>
            </label>
            <label id='Password'>
                Password:
                <input type="password" value={ password } onChange ={ e=> setPassword(e.target.value)}></input>
            </label>
            <label id='Password'>
                Verify Password:
                <input type="password"  value={verify_password }  onChange={ e=> setVPassword(e.target.value)}></input>
            </label>
            <button type='submit'>Sign up</button>
        </form>
    )
 
 }


 export default SignUp;