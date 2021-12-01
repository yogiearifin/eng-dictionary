import React from "react";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("renders english dictionary app", () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId("input-word");
  expect(input).toBeInTheDocument();
  user.type(input, "hello");
  const search = getByTestId("search-icon");
  expect(search).toBeInTheDocument();
});
