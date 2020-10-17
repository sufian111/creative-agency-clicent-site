import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { userDetails } from '../../App';
import "./OrderCourseMain.css"
const OrderCourseMain = () => {

    const {id}= useParams();
    
    const [currentData, setCurrentData] = useState({});
  
    const [loggingUser, setLoggingUser] = useContext(userDetails);

    useEffect(() => {
        fetch("http://localhost:5000/allCourse")
          .then((res) => res.json())
          .then((data) => {
            const dataMatch = data.find((data) => data.id.toString() === id);
            setCurrentData(dataMatch);
          })
          .catch((er) => console.log(er));
      }, []);
    
      const history = useHistory();

const handleBuy= () => {
    
    const information = { ...currentData,...loggingUser};
    console.log(information)

fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(information),
    });
    history.push("/customar");
  };  
    


    return (
        <div  className="box col-md-3">
      <img className="imageSection" src={currentData.img} alt="" />
      <p className="headingSection">{currentData.name}</p>
      <p className="poneSetion">{currentData.description}</p>
        <button onClick={handleBuy} className="btn btn-primary m-5">Get Course</button>
    </div>
    );
};

export default OrderCourseMain;