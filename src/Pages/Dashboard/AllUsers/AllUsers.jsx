/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  // const { data: users = [], refetch } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     // const res = await fetch("http://localhost:5000/users");
  //     return res.json();
  //   },
  // });
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // console.log(users);

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleUserDelete = (user) => {};

  return (
    <div>
      <Helmet>Bistro Boss | AllUsers</Helmet>
      <div>
        <h3 className="text-3xl font-bold">Total Users: {users.length}</h3>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  //   console.log(user);
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.role == "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          className="btn rounded-md text-lg bg-orange-600 text-white"
                          onClick={() => handleMakeAdmin(user)}
                        >
                          <FaUserShield />
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        className="btn rounded-md bg-red-600 text-white"
                        onClick={handleUserDelete}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
