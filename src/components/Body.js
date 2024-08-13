import { useContext } from "react";
import UserCard, { withAdminRole } from "../components/UserCard";
import useOnline from "../hooks/useOnline";
import useUsersList from "../hooks/useUsersList";
import UserContext from "../utils/UserContext";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUserName } from "../utils/userSlice";

const Body = () => {
  const { usersData, filterDataFun } = useUsersList();
  const onlineStatus = useOnline();
  const UserCardAdmin = withAdminRole(UserCard);
  const { setUserName } = useContext(UserContext);
  const reduxUserName = useSelector((store) => {
    return store.user.userName;
  });
  const dispatch = useDispatch();

  console.log("Body Component Rendered....");

  const handleUpdateUserName = () => {
    dispatch(updateUserName(["Rushiraj", "Nidhi", "Urja", "Srushti"]));
  };

  if (onlineStatus === false) {
    return (
      <div>
        <h1>Seems your internet connection is not working!</h1>
      </div>
    );
  }

  return usersData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      <div className="flex items-center gap-3">
        <button
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
          onClick={filterDataFun}
        >
          Age Greater than 30
        </button>
        <input
          className="border-black border-[1px] px-2 py-1 rounded-md"
          onChange={(e) => {
            console.log(e.target.value);
            setUserName(e.target.value);
          }}
        />
        <p>{reduxUserName}</p>
        <button
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
          onClick={handleUpdateUserName}
        >
          Update User Name
        </button>
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        {usersData.map((user, index) => {
          return (
            <Link to={`/user/${user.id}`} key={user.id} className="">
              {user.role === "admin" ? (
                <UserCardAdmin userData={user} />
              ) : (
                <UserCard userData={user} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
