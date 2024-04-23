import React from "react";
import UserContext from "../../utils/userContext";
class UserClass extends React.Component {
  //react.compoent is give by react  package and it gives some property to userclass
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      userinfo: {
        name: "abc",
        location: "xyz",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({ userinfo: json });
  }
  updateValue = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  componentWillUnmount() {
    console.log("chhod diya page");
  }
  render() {
    console.log("rendering is call child");
    return (
      <>
        <div>User Class {this.state.count}</div>
        <div>
          {" "}
          hey i am {this.state.userinfo.name} from{" "}
          {this.state.userinfo.location}
        </div>
        <button onClick={() => this.setState({ count: this.state.count + 2 })}>
          click
        </button>
        {/* in class base function we can use context data by importing context created data and after add it in return with context name and , consumer with some piece of jsx */}
        <UserContext.Consumer>
          {({loggedInUser}) => <div>{loggedInUser}</div>}
        </UserContext.Consumer>
      </>
    );
  }
}
export default UserClass;
