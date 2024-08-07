import Shimmer from "./Shimmer";
import useUser from "../hooks/useUser";
import UserAccordions from "./UserAccordions";
import UserContext from "../utils/UserContext";

const User = () => {
  const userData = useUser();
  const data = "Dummy Data";

  if (!userData) return <Shimmer />;

  const { firstName, lastName, maidenName, age, email, address, image } =
    userData;
  const userDetails = [
    {
      accordionTitle: "Company",
      name: userData.company.name,
      title: userData.company.title,
    },
    {
      accordionTitle: "Bank",
      name: userData.bank.cardNumber,
      title: userData.bank.cardExpire,
    },
    {
      accordionTitle: "Crypto",
      name: userData.crypto.coin,
      title: userData.crypto.network,
    },
  ];
  const userAddress = `${address.address} ${address.city} ${address.state} ${address.stateCode} ${address.postalCode}`;

  return (
    <UserContext.Provider value={{ loggedInUser: "Urja" }}>
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
        <UserAccordions userDetails={userDetails} data={data} />
      </div>
    </UserContext.Provider>
  );
};

export default User;
