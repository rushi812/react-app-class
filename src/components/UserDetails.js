import { useContext } from "react";

import UserContext from "../utils/UserContext";

const UserDetails = ({
  accordionTitle,
  name,
  title,
  showDetails,
  handleClick,
  data,
}) => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div
      className="bg-gray-200 w-1/2 p-5  rounded-xl shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold">{accordionTitle}</span>
        <span>{showDetails ? "⬆️" : "⬇️"}</span>
      </div>
      {showDetails && (
        <div>
          <p>{name}</p>
          <p>{title}</p>
          {data}
          {loggedInUser}
        </div>
      )}
    </div>
  );
};

export default UserDetails;
