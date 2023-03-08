import React, { useEffect, useState } from 'react';
import '../component/navbar.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Home = () => {
  const [foodList, setFoodList] = useState([]);
  const navigate = useNavigate();

  const getfoodList = async () => {
    let jwt = Cookies.get('jwt'); // define jwt variable here
    if (!jwt) {
      navigate('/');
    }
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    };

    const response = await fetch('http://localhost:4000/api/v1/foodRecipeList', {
      headers,
    });
    const data = await response.json();
    console.log('checking for data',data['data'])
    setFoodList(data['data']);
  };

  useEffect(() => {
    // console.log('get good)
     
    getfoodList();
  }, []);

  return (
    <div className="div1">
      <table id="customers">
        <thead>
          <tr>
            <th>Creator Name</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {foodList.length > 0 &&
            foodList.map((ele, index) => {
              console.log(ele)
              return (
                <tr key={index}>
                  <td>{ele.name}</td>
                  <td>{ele.desc}</td>
                  <td>
                    <img
                      src={ele.image_url}
                      alt="food recipe"
                      width="100"
                      height="100"
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
