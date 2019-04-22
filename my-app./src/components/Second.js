import React, { Component } from "react";

export default class Second extends Component {
  render() {
    return (
      <div style={{ background: `${this.props.color}` }}>
        <center>
          <button
            onClick={() => {
              this.props.handleClick();
            }}
          >
            Boom Boom
          </button>
        </center>
      </div>
    );
  }
}
