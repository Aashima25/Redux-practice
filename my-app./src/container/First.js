import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";
import Second from "../components/Second";

class First extends Component {
  render() {
    return (
      <Second handleClick={this.props.loadColor} color={this.props.color} />
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(First);
