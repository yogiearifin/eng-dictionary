import { render, screen } from "@testing-library/react";
import { Cards } from "./card";

it("render input correctly", () => {
  const { getByText } = render(
    <Cards
      word={"hello"}
      origin={
        "early 19th century: variant of earlier hollo ; related to holla."
      }
      phonetic={"həˈləʊ"}
    />
  );
  expect(getByText(/hello/i)).toBeInTheDocument();
  screen.debug();
});
