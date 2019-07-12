import React from "react";
import renderer from "react-test-renderer";

import People from "./People";

describe("<People />", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<People />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
