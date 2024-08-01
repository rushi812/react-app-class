import Shimmer from "./Shimmer";
import useUser from "../hooks/useUser";

const User = () => {
  const userData = useUser();

  if (!userData) return <Shimmer />;

  const { firstName, lastName, maidenName, age, email, address, image } =
    userData;

  const userAddress = `${address.address} ${address.city} ${address.state} ${address.stateCode} ${address.postalCode}`;

  return (
    <div className="user">
      <img src={image} alt={firstName} />
      <h1>
        Name: {firstName} {maidenName} {lastName}
      </h1>
      <h2>Age: {age}</h2>
      <h2>Email: {email}</h2>
      <h2>Address: {userAddress}</h2>
    </div>
  );
};

export default User;
