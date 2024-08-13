import React from "react";
import MyDetails from "./MyDetails";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor Called");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render Called");

    return (
      <div className="p-5">
        <h1>About</h1>
        <h2>Welcome to About Page!</h2>
        <MyDetails name="Rushiraj" location="India" />
        <MyDetails name="Elon Musk" location="USA" />
        <MyDetails name="Abdul" location="Pakistan" />
      </div>
    );
  }
}

export default About;
