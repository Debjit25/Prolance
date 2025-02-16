// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
// import { Link, useParams } from "react-router-dom";
// import newRequest from "../../utils/newRequest";
import "./Message.scss";

const Message = () => {
  // const { id } = useParams();
  // const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // const queryClient = useQueryClient();

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["messages"],
  //   queryFn: () =>
  //     newRequest.get(`/messages/${id}`).then((res) => {
  //       return res.data;
  //     }),
  // });

  // const mutation = useMutation({
  //   mutationFn: (message) => {
  //     return newRequest.post(`/messages`, message);
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["messages"]);
  //   },
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   mutation.mutate({
  //     conversationId: id,
  //     desc: e.target[0].value,
  //   });
  //   e.target[0].value = "";
  // };

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          {/* <Link to="/messages">Messages</Link> &gt; John Doe &gt; */}
        </span>
          <div className="messages">
              <div
                className="owner item"
                
              >
                <img
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, repellat dolor nostrum nemo expedita in officiis iste laborum corporis ea quos architecto. Beatae iste reprehenderit harum blanditiis nemo ad magnam!</p>
              </div>
          </div>
        <hr />
        <form className="write">
          <textarea type="text" placeholder="write a message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
