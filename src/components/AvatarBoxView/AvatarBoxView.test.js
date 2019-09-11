import React from "react";
import { shallow } from "enzyme";
import AvatarBoxView from "./AvatarBoxView";
import toJson from "enzyme-to-json";

describe("AvatarBoxView - general ", () => {
  it("should match Snapshot", () => {
    const props = {
      status: "online", 
      src: "url", 
      name: "name", 
    };
    const wrapper = shallow(<AvatarBoxView {...props} />);
    expect(wrapper).toHaveLength(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
