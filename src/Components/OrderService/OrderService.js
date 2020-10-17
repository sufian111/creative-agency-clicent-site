import React from "react";
import "./OrderService.css";
const OrderService = () => {
  const handleSubmit = () => {
    console.log("click");
  };
  return (
    <div style={{ padding: "55px" }}>
      <form action="">
        <input placeholder="Your name" type="text" />
        <input placeholder="Your email address" type="email" />
        <input placeholder="Course Name" type="text" />
        <input placeholder="Project Details" type="text" />
        <input
          style={{ marginRight: "10px" }}
          placeholder="Price"
          type="number"
        />
        <input placeholder="Your name" type="file" />
      </form>
      <button onClick={handleSubmit} className="btnEdit">
        Send
      </button>
    </div>
  );
};

export default OrderService;
