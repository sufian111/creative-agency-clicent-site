import React, { useContext, useEffect, useState } from "react";
import { userDetails } from "../../App";
import AddReview from "../AddReview/AddReview";
import OrderService from "../OrderService/OrderService";
import CourseCard from "./CourseCard";

const CustormarMain = () => {

  const [loggingUser, setLoggingUser] = useContext(userDetails);
  const[allServices,setAllServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/myOrder?email=" +loggingUser.email)
      .then((response) => response.json())
      .then((data) => setAllServices(data));
  }, []);


  const [tureOrder, setTrueOrder] = useState(false);
  const [tureReview, setTrueReview] = useState(false);
  const [tureService, setTrueService] = useState(true);
  const handleOrder = () => {
    setTrueOrder(true);
    setTrueReview(false);
    setTrueService(false);
  };

  const handlelist = () => {
    setTrueOrder(false);
    setTrueReview(false);
    setTrueService(true);
  };

  const handleReview = () => {
    setTrueOrder(false);
    setTrueReview(true);
    setTrueService(false);
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <button
            onClick={handleOrder}
            style={{ display: "block" }}
            className="btn"
          >
            Order
          </button>
          <button
            onClick={handlelist}
            style={{ display: "block" }}
            className="btn"
          >
            Service list
          </button>
          <button
            onClick={handleReview}
            style={{ display: "block" }}
            className="btn"
          >
            Review
          </button>
        </div>
        <div style={{ backgroundColor: "#E5E5E5" }} className="col-md-9">
          {tureService && (
            <div className="row">
              {allServices.map((service) => (
                <CourseCard service={service}></CourseCard>
              ))}
            </div>
          )}
          {tureReview && <AddReview></AddReview>}
          {tureOrder && <OrderService></OrderService>}
        </div>
      </div>
    </div>
  );
};

export default CustormarMain;
