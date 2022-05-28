import React from "react";

const MyOrderRow = ({ order, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order.product}</td>
      <td>
        {order.status === "delivered" ? (
          <p className="text-secondary">{order.status}</p>
        ) : (
          <p className="text-green-500">{order.status}</p>
        )}
      </td>
      <td>
        <p>{order.quantity} piece</p>
        <p>Total Price : {order.totalPrice}</p>
      </td>
      <td>
        {order.status !== "delivered" && (
          <button className="btn btn-xs btn-warning mr-2">Cancel</button>
        )}
        <button className="btn btn-xs btn-success">Make Payment</button>
      </td>
    </tr>
  );
};

export default MyOrderRow;
