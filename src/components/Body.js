import UserCard, { withAdminRole } from "../components/UserCard";
import useOnline from "../hooks/useOnline";
import useUsersList from "../hooks/useUsersList";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const { usersData, filterDataFun } = useUsersList();
  const onlineStatus = useOnline();

  const UserCardAdmin = withAdminRole(UserCard);

  if (onlineStatus === false) {
    return (
      <div>
        <h1>Seems your internet connection is not working!</h1>
      </div>
    );
  }

  console.log(usersData);

  return usersData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      <div>
        <button
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
          onClick={filterDataFun}
        >
          Age Greater than 30
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
