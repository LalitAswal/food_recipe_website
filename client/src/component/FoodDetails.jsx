import React, { useEffect, useState} from 'react';
import '../component/navbar.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const Home = () => {
    const [foodDetail, setFoodDetail] = useState([]);
    const navigate = useNavigate();

    const jwt = Cookies.get('jwt')
    if(!jwt){
      navigate('/')

    }
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
  }
    const getFoodDetails = async ()=>{

        const response= await fetch('http://localhost:4000/api/v1/foodDetail', {headers});
        const data = await response.json();
        console.log('data food details', data['data'])
        setFoodDetail(data['data'])

    }
    useEffect(()=>{
        getFoodDetails();
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
              <th>Amount</th>
              <th>steps</th>
            </tr>
            {

foodDetail.map((ele,index) =>{
    return (
        <tr key={index}>
          <th>{ele.name}</th>
          <th>{ele.desc}</th>
          <td>
                    <img
                      src={ele.image_url}
                      alt="food recipe"
                      width="100"
                      height="100"
                    />
                  </td>
          <th>{ele.amount}</th>
          <th>{ele.step}</th>
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