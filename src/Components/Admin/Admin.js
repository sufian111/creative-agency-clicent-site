import React, { useEffect, useState } from "react";
import CustomarNav from "../FinishCustomar/CustomarNav";
import "./Admin.css";
import AdminAllOrder from "./AdminAllOrder";
const Admin = () => {

  
  const[allOrder,setAllOrder] = useState([]);

  

  useEffect(() => {
    fetch("http://localhost:5000/allOrder")
      .then((response) => response.json())
      .then((data) => setAllOrder(data));
  }, []);


  return (
    <div>
      <CustomarNav></CustomarNav>
      <div className="row">
        <div className="col-md-3">
          <button className="btn ">Add Services</button>
          <button style={{ display: "block" }} className="btn ">
            Services
          </button>
          <button style={{ display: "block" }} className="btn ">
            Admin
          </button>
        </div>
        <div className="col-md-9 bgAdminColor">
          {
            allOrder.map(order => <AdminAllOrder order={order}></AdminAllOrder>)
          }
        </div>
      </div>
    </div>
  );
};

export default Admin;
