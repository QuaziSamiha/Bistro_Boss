import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();

  /* ------------------------------  
                                    CAN BE USED USEEFFECT ALSO INSTEAD OF AXIOS
                                                                          --------------------------------------*/

  // --------------------------------------USE AXIOS SECURE WITH REACT QUERY-----------------------------------------
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log("is admin response", res);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];

  /**--------------FROM PH GITHUB---------------------- */
  //   const { data: isAdmin, isPending: isAdminLoading } = useQuery({
  //     queryKey: [user?.email, 'isAdmin'],
  //     queryFn: async () => {
  //         const res = await axiosSecure.get(`/users/admin/${user.email}`);
  //         // console.log(res.data);
  //         return res.data?.admin;
  //     }
  // })
  // return [isAdmin, isAdminLoading]
};

export default useAdmin;
