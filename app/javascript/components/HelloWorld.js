import React from "react";
import PropTypes from "prop-types";

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <React.Fragment>
            Greetings: {this.props.greeting}
        </React.Fragment>
      </div>
    );
  }
}

HelloWorld.propTypes = {
    greeting: PropTypes.string
};

export default HelloWorld;