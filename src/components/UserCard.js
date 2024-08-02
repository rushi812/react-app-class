const UserCard = (props) => {
  const { address, image, fName, lName, gender, phone, mName, age } =
    props.userData;

  const userAddress = `${address.address} ${address.city} ${address.state} ${address.stateCode} ${address.postalCode}`;

  return (
    <div className="bg-gray-100 w-[250px] flex flex-col items-center p-4 rounded-lg">
      <img
        src={image}
        alt="User Image"
        className="rounded-full border-gray-300 border-2 w-40"
      />
      <p className="text-xl font-bold my-2">
        {fName} {mName} {lName}
      </p>
      <p>{age} years old</p>
      <p>{gender}</p>
      <p>{phone}</p>
      <p>{userAddress}</p>
    </div>
  );
};

// Higher Order Component
export const withAdminRole = (Component) => {
  return (props) => {
    return (
      <div className="relative">
        <lable className="absolute bg-black text-white px-2 rounded-md top-2 left-2">
          {props.userData.role}
        </lable>
        <Component userData={props.userData} />
      </div>
    );
  };
};

export default UserCard;
