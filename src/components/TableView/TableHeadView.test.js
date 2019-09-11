import React from "react";
import { shallow } from "enzyme";
import TableHeadView from "./TableHeadView";
import toJson from "enzyme-to-json";

describe("TableHeadView - general ", () => {
  it("should match Snapshot", () => {
    const props = {
      onRequestSort: () => {},
      order: "asc",
      orderBy: ""
    };
    const wrapper = shallow(<TableHeadView {...props} />);
    expect(wrapper).toHaveLength(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
