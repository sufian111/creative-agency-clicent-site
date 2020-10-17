import React from 'react';

const AdminAllOrder = (props) => {

    const order = props.order;
  

    return (
        <div>
           <div style={{margin:"10px",border: "1px solid black",color:"black",padding: "10px"}}>
               <p>Name:-{order.name} Email:-{order.email}</p>
               <button>Approve</button>
               <button>Delete</button>
           </div>
        </div>
    );
};

export default AdminAllOrder;