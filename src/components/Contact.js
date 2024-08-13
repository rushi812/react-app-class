import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    console.log("Contact useEffect Called!");

    return () => {
      console.log("Contact un-mounted!");
    };
  }, []);

  return (
    <div>
      <h1>Contact</h1>
      <h2>Welcome to Contact Page!</h2>
    </div>
  );
};

export default Contact;
