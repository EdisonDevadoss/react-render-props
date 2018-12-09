import React from "react";
import PropTypes from "prop-types";

class RenderProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
  }
  toggle = () => {
    this.setState({ on: !this.state.on });
  };
  render() {
    const { render } = this.props;
    return (
      <div>
        {render({
          on: this.state.on,
          toggle: this.toggle
        })}
      </div>
    );
  }
}
export default RenderProps;
