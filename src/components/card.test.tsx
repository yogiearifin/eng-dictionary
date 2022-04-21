import { render, screen } from "@testing-library/react";
import { Cards } from "./card";

const renderTestCard = (word: string, origin: string, phonetic?: string) => {
  return <Cards word={word} origin={origin} phonetic={phonetic} />;
};

it("render input correctly", () => {
  const { getByText } = render(
    renderTestCard(
      "hello",
      "early 19th century: variant of earlier hollo ; related to holla.",
      "həˈləʊ"
    )
  );
  expect(getByText(/hello/i)).toBeInTheDocument();
  // screen.debug();
});
