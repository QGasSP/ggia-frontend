import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders App.js", () => {
  render(<App />);
  const txtElement = screen.getByText(/Qgassp/i);
  expect(txtElement).toBeInTheDocument();
});
