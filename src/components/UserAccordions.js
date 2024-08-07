import { useState } from "react";
import UserDetails from "./UserDetails";

const UserAccordions = (props) => {
  const { userDetails, data } = props;
  const [showDetails, setShowDetails] = useState();

  return userDetails.map((item, index) => {
    return (
      <UserDetails
        accordionTitle={item.accordionTitle}
        name={item.name}
        title={item.title}
        showDetails={showDetails === index} // 0
        handleClick={() => setShowDetails(index)}
        data={data}
      />
    );
  });
};

export default UserAccordions;
