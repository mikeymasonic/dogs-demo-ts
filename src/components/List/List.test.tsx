import React from "react";
import { shallow } from "enzyme";
import * as BreedContext from "../../hooks/breedProvider";
import List from "./List";

describe("List component", () => {
  test("it should mock the context and render List", () => {
    const contextValues = { breed: "husky" };

    jest
      .spyOn(BreedContext, "useHandleDetail")
      .mockImplementation(() => contextValues);

    const wrapper = shallow(<List />);
    expect(wrapper).toMatchSnapshot();
  });
});
