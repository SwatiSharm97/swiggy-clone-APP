// import UserClass from "../../ClassComponent/UserClass";
import React from "react";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
    console.log("parent constructr call")
  }
  componentDidMount(){
    console.log("componentdidmount call")
  }
 
  render() {
    console.log("parent rendering call")
    return (
      <>
        <div>hello i am in about us page</div>
        {/* <UserClass name ={"swati"}/> */}
      </>
    );
  }
}
export default AboutUs;
