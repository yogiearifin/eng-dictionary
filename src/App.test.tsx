import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders english dictionary app", () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId("input-search");
  expect(input).toBeInTheDocument();
  // user.type(input, "hello");
  userEvent.type(input, "hello{enter}");
  const search = getByTestId("search-icon");
  expect(search).toBeInTheDocument();
  screen.debug();
});
