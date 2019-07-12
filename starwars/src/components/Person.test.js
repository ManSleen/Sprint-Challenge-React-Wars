import React from "react";
import renderer from "react-test-renderer";

import Person from "./Person";

describe("<Person />", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Person />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
