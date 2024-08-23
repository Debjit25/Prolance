import React from "react";
// import { Link } from "react-router-dom";
import "./MyGigs.scss";
// import getCurrentUser from "../../utils/getCurrentUser";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import newRequest from "../../utils/newRequest";

function MyGigs() {
  // const currentUser = getCurrentUser();

  // const queryClient = useQueryClient();

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["myGigs"],
  //   queryFn: () =>
  //     newRequest.get(`/gigs?userId=${currentUser.id}`).then((res) => {
  //       return res.data;
  //     }),
  // });

  // const mutation = useMutation({
  //   mutationFn: (id) => {
  //     return newRequest.delete(`/gigs/${id}`);
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["myGigs"]);
  //   },
  // });

  // const handleDelete = (id) => {
  //   mutation.mutate(id);
  // };

  return (
    <div className="myGigs">
      
        <div className="container">
          <div className="title">
            <h1>Gigs</h1>
              {/* <Link to="/add"> */}
                <button>Add New Gig</button>
              {/* </Link> */}
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
           
              <tr>
                <td>
                  <img className="image"  alt="" />
                </td>
                <td>fasdfa</td>
                <td>2 crore</td>
                <td>20 million</td>
                <td>
                  <img
                    className="delete"
                    src="./img/delete.png"
                    alt=""
                   
                  />
                </td>
              </tr>
          </table>
        </div>
    </div>
  );
}

export default MyGigs;
