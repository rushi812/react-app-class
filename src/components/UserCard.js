const UserCard = (props) => {
  const { address, userImage, fName, lName, gender, phone, mName, age } = props;

  const userAddress = `${address.address} ${address.city} ${address.state} ${address.stateCode} ${address.postalCode}`;

  return (
    <div className="bg-gray-100 w-[250px] flex flex-col items-center p-4 rounded-lg">
      <img
        src={userImage}
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

export default UserCard;
