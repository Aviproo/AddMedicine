import { useState } from "react";

const ShowMedicine = (props) => {
  const show = props.detail.map((item) => (
    <div
      key={item.id}
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <div>{item.name}</div>
      <div>{item.description}</div>
      <div>{item.price}</div> <div>{item.quantity}</div>
      <button>Add</button>
    </div>
  ));
  return <div>{show}</div>;
};
export default ShowMedicine;
