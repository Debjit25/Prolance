import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import "./Orders.scss";
// import { useQuery } from "@tanstack/react-query";
// import newRequest from "../../utils/newRequest";

const Orders = () => {
  // const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // const navigate = useNavigate();
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["orders"],
  //   queryFn: () =>
  //     newRequest.get(`/orders`).then((res) => {
  //       return res.data;
  //     }),
  // });

  // const handleContact = async (order) => {
  //   const sellerId = order.sellerId;
  //   const buyerId = order.buyerId;
  //   const id = sellerId + buyerId;

  //   try {
  //     const res = await newRequest.get(`/conversations/single/${id}`);
  //     navigate(`/message/${res.data.id}`);
  //   } catch (err) {
  //     if (err.response.status === 404) {
  //       const res = await newRequest.post(`/conversations/`, {
  //         to: currentUser.seller ? buyerId : sellerId,
  //       });
  //       navigate(`/message/${res.data.id}`);
  //     }
  //   }
  // };
  return (
    <div className="orders">
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Contact</th>
            </tr>
              <tr>
                <td>
                  <img className="image" src="" alt="" />
                </td>
                <td>title</td>
                <td>2 crore</td>
                <td>
                  <img
                    className="message"
                    src="./img/message.png"
                    alt=""  
                  />
                </td>
              </tr>
          </table>
        </div>
  
    </div>
  );
};

export default Orders;
