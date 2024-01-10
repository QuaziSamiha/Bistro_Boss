/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

// useEffect will be controlled automatically
const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  //   const { isLoading, isError, data, error } = useQuery({})
  const {
    // isLoading,
    refetch,
    data: cart = [],
  } = useQuery({
    // changing name of the data a giving a default value
    /**-----------------------------------THIRD VERSION--------------------------------- */
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await fetch(
        `/carts?email=${user.email}`, // BASE URL IS FIXED
        {
          headers: { authorization: `bearer ${token}` },
        }
      );
      return response.json();
    },

    /**-----------------------------------SECOND VERSION--------------------------------- */
    // queryKey: ["carts", user?.email],
    // enabled: !loading,
    // queryFn: async () => {
    //   const response = await fetch(
    //     `/carts?email=${user.email}`,
    //     {
    //       headers: { authorization: `bearer ${token}` },
    //     }
    //   );
    // return response.json();}

    /**-----------------------------------FIRST VERSION--------------------------------- */
    // queryKey: ["carts", user?.email],  // GIVINING CACHING BY DEFAULT
    // queryFn: async () => {
    //   const response = await fetch(
    //     `http://localhost:5000/carts?email=${user.email}`
    //   );
    //   return response.json();
    // },
  });

  // return [cart, isLoading];
  return [cart, refetch];
};
export default useCart;
