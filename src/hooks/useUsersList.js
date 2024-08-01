import { useState, useEffect } from "react";
import { USERS_API_URL } from "../utils/constants";

const useUsersList = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch(USERS_API_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsersData(data.users);
      });
  }, []);

  const filterDataFun = () => {
    const filteredData = usersData.filter((user) => {
      return user.age > 30;
    });
    setUsersData(filteredData);
  };

  return { usersData, filterDataFun };
};

export default useUsersList;
