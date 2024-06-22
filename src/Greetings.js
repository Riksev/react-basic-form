import React from "react";

class Greetings extends React.Component {
  render() {
    return (
      <div>
        Hey you! {this.props.firstName} {this.props.lastName}!
      </div>
    );
  }
}

export default Greetings;
