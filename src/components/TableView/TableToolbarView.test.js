import React from "react";
import { shallow } from "enzyme";
import TableToolbarView from "./TableToolbarView";
import toJson from "enzyme-to-json";

describe("TableToolbarView - general ", () => {
  it("should match Snapshot", () => {
    const props = {
      onChange: () => {},
      filters: {
        status: {
          online: false,
          offline: false
        },
      }
    };
    const wrapper = shallow(<TableToolbarView {...props} />);
    expect(wrapper).toHaveLength(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
