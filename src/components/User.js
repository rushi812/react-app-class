import Shimmer from "./Shimmer";
import useUser from "../hooks/useUser";
import UserDetails from "./UserDetails";

const User = () => {
  const userData = useUser();

  if (!userData) return <Shimmer />;

  console.log(userData);

  const { firstName, lastName, maidenName, age, email, address, image } =
    userData;

  const userAddress = `${address.address} ${address.city} ${address.state} ${address.stateCode} ${address.postalCode}`;

  return (
    <div className="p-4 flex flex-col justify-center items-center gap-3">
      <div className="w-52">
        <img src={image} alt={firstName} className="w-full h-full" />
      </div>
      <h1 className="font-bold text-xl">
        {firstName} {maidenName} {lastName}
      </h1>
      <h2>{age} years old</h2>
      <h2>{email}</h2>
      <h2>{userAddress}</h2>
      <UserDetails
        accordionTitle="Company"
        name={userData.company.name}
        title={userData.company.title}
      />
      <UserDetails
        accordionTitle="Bank Card Details"
        name={userData.bank.cardNumber}
        title={userData.bank.cardExpire}
      />
      <UserDetails
        accordionTitle="Crypto"
        name={userData.crypto.coin}
        title={userData.crypto.network}
      />
    </div>
  );
};

export default User;
