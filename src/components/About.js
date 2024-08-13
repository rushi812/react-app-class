import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>About</h1>
      <h2>Welcome - {loggedInUser} to About Page!</h2>
      <p>This page gives info about our project!</p>
    </div>
  );
};

export default About;
