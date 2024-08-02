import { useState } from "react";

const UserDetails = ({ accordionTitle, name, title }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div
      className="bg-gray-200 w-1/2 p-5  rounded-xl shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold">{accordionTitle}</span>
        <span>⬇️</span>
      </div>
      {showDetails === true && (
        <div>
          <p>{name}</p>
          <p>{title}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
