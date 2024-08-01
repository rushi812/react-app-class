import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { USERS_API_URL } from "../utils/constants";

const useUser = () => {
  const [userData, setUserData] = useState();
  const params = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const jsonData = await fetch(`${USERS_API_URL}/${params.uId}`);
    const data = await jsonData.json();
    setUserData(data);
  };

  return userData;
};

export default useUser;
