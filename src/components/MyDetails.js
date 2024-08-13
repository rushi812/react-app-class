import React from "react";

class MyDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {},
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
    const res = await fetch("https://api.github.com/users/rushi812");
    const data = await res.json();
    this.setState({
      userInfo: data,
    });
  }

  componentDidUpdate() {
    console.log(this.props.name + "Child Component Did Update");
  }

  componentWillUnmount() {
    console.log(this.props.name + "Child Component Will Un-Mount");
  }

  render() {
    console.log(this.props.name + "Child Render");
    const { name, location } = this.props;

    return (
      <div className="border-2 border-black p-2">
        <h1 className="text-xl font-bold">My Details</h1>
        <h2>Count: {this.state.count}</h2>
        <button
          className="bg-gray-300 px-2 cursor-pointer rounded-md"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment Count
        </button>
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
        <h3>Twitter: @{this.state.userInfo.twitter_username}</h3>
      </div>
    );
  }
}

export default MyDetails;
