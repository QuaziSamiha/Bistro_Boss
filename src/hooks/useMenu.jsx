// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  // ---------------------------2nd version---------------------------
  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/menu");
      return res.json();
    },
  });

  return [menu, loading, refetch];

  // --------------------------1ST VERSION--------------------------
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   // fetch("menu.json")
  //   fetch(`http://localhost:5000/menu`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(false);
  //     });
  // }, []);
  // return [menu, loading];
};

export default useMenu;
