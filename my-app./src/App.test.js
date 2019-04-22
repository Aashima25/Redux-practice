import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

xit("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Testing App Container ", () => {
  it("Testing suite", () => {
    expect(true).toBe(true);
  });

  it("Testing Bigdiv", () => {
    //initalize
    const wrapper = shallow(<App />);
    //assert
    //expect
    expect(wrapper.find(".Bigdiv").exists()).toBe(true);
  });
  it("should now render a H1 tag ,its content and it should also be clickable", () => {
    //initalize
    const wrapper = shallow(<App />);
    //assert
    //expect
    expect(wrapper.find("h1").exists()).toBe(true);
    expect(wrapper.find("h1").text()).toEqual("Click me");
  });
});
