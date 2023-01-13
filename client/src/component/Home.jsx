import React, { useEffect, useState} from 'react';
import '../component/navbar.css';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [foodList, setFoodList] = useState([]);
    const navigate = useNavigate();

    const getfoodList = async ()=>{
      const jwt = localStorage.getItem('jwt');
      if(!jwt){
        navigate('/')
      }
      const headers = {
        'Content-Type': 'application/json',
        'authorization': `${jwt}`
    }

      const response= await fetch('http://localhost:4000/api/v1/foodRecipeList',{headers});
      const data = await response.json();
      setFoodList(data['data'])
      
   


    }
    useEffect(()=>{
        getfoodList();
    }, []);
  return (
    <h1>
    {

          <div className='div1'>
            <table id="customers">
            <tr>
              <th>Creator Name</th>
              <th>description</th>
              <th>Image</th>
            </tr>
            {

foodList.map((ele,index) =>{
    return (
        <tr key={index}>
          <th>{ele.name}</th>
          <th>{ele.desc}</th>
          <th> <img src={ele.image_url} alt="image" width="100" height="100"></img> </th>
        </tr>
        
        )
        
      })
            }
          </table>
          </div>
    }
  </h1>
  )
}


export default Home;