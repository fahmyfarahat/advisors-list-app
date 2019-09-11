import React from "react";
import { shallow, mount } from "enzyme";
import TableListView from "./TableListView";
import { LinearProgress } from "@material-ui/core";
import toJson from "enzyme-to-json";
import AvatarBoxView from "../AvatarBoxView/AvatarBoxView";

describe("TableListView - general ", () => {
  let props;
  beforeEach(()=> {
    props = {
      loading: false, 
      advisorData: [], 
      classes: {}
    };
  });

  it("should match Snapshot", () => {
    const wrapper = shallow(<TableListView {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render <LinearProgress/> if loading is true", () => {
    props.loading = true;
    const wrapper = shallow(<TableListView {...props} />);
    expect(wrapper.find(LinearProgress)).toHaveLength(1);
  })

  it("should render <TableRow/>", () => {
    props.advisorData = [{
      "id": 1,
      "name": "Loraine Mueller",
      "avatar": "url",
      "status": "offline",
      "language": "german",
      "rating": 4,
      "reviews": 4308
    }];
    const wrapper = mount(<TableListView {...props} />);
    expect(wrapper.find(AvatarBoxView)).toHaveLength(1);
  });
})
