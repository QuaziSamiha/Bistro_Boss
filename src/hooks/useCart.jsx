import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

// useEffect will be controlled automatically
const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  //   const { isLoading, isError, data, error } = useQuery({})
  const {
    // isLoading,
    refetch,
    data: cart = [],
  } = useQuery({
    // changing name of the data a giving a default value
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      // const response = await fetch(
      //   `http://localhost:5000/carts?email=${user.email}`
      // );
      const response = await fetch(
        `http://localhost:5000/carts?email=${user.email}`,
        {
          headers: { authorization: `bearer ${token}` },
        }
      );
      return response.json();
    },
  });

  // return [cart, isLoading];
  return [cart, refetch];
};
export default useCart;
