import React from "react";
import { shallow } from "enzyme";
import HeaderLayout from "./HeaderLayout";
import toJson from "enzyme-to-json";

describe("HeaderLayout - general ", () => {
  it("should match Snapshot", () => {
    const wrapper = shallow(<HeaderLayout />);
    expect(wrapper).toHaveLength(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
