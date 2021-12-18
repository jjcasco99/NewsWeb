import React from "react";
import { shallow } from "enzyme";
import Listnews from "./Listnews";

describe("Listnews", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Listnews />);
    expect(wrapper).toMatchSnapshot();
  });
});
