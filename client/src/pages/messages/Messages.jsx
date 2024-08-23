// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
// import { Link } from "react-router-dom";
// import newRequest from "../../utils/newRequest";
import "./Messages.scss";
import { Link } from "react-router-dom";
// import moment from "moment";

const Messages = () => {
  // const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // const queryClient = useQueryClient();

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["conversations"],
  //   queryFn: () =>
  //     newRequest.get(`/conversations`).then((res) => {
  //       return res.data;
  //     }),
  // });

  // const mutation = useMutation({
  //   mutationFn: (id) => {
  //     return newRequest.put(`/conversations/${id}`);
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["conversations"]);
  //   },
  // });

  // const handleRead = (id) => {
  //   mutation.mutate(id);
  // };

  return (
    <div className="messages">
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
          </div>
          <table>
            <tr>
              <th>Seller</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
           
              <tr className="active">
                <td>john Doe</td>
                <td><Link to="/message/123">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptate facere</Link></td>
                <td>2 day ago</td>
                <td>
                    <button >
                      Mark as Read
                    </button>
                </td>
              </tr>
          </table>
        </div>
    </div>
  );
};

export default Messages;
