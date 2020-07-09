import React from "react";
import {
  render,
  waitForElement,
  fireEvent,
  within,
} from "@testing-library/react";
import App from "../App";
import { keyboardButtons } from "../keyboard/Keyboard";

describe("Display test", () => {
  it("is rendering all buttons", async () => {
    const { getByTestId, getByText } = render(<App />);
    await waitForElement(() => getByTestId("keyboard"));
    await isRenderingAllButtons(getByText);
  });

  const isRenderingAllButtons = async (getByText: Function) => {
    await waitForElement(() =>
      Object.values(keyboardButtons).map((val) => getByText(val))
    );
  };

  it("change display accordantly to the pressed button", async () => {
    const { getByTestId, getByText } = render(<App />);
    const { getByText: displayTextByText } = within(getByTestId("display"));
    fireEvent.click(getByText("1"));
    displayTextByText("1");
    fireEvent.click(getByText("+"));
    displayTextByText("1+");
    fireEvent.click(getByText("7"));
    displayTextByText("1+7");
    fireEvent.click(getByText("="));
    displayTextByText("8");
    fireEvent.click(getByText("÷"));
    displayTextByText("8÷");
    fireEvent.click(getByText("2"));
    displayTextByText("8÷2");
    fireEvent.click(getByText("="));
    displayTextByText("4");
  });

  it("display point separator", async () => {
    const { getByTestId, getByText } = render(<App />);
    const { getByText: displayTextByText } = within(getByTestId("display"));
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("5"));
    fireEvent.click(getByText("6"));
    fireEvent.click(getByText("2"));
    displayTextByText("1.562");
    fireEvent.click(getByText("4"));
    fireEvent.click(getByText("8"));
    displayTextByText("156.248");
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("2"));
    displayTextByText("15.624.822");
    fireEvent.click(getByText("+"));
    displayTextByText("15.624.822+");
    fireEvent.click(getByText("2"));
    displayTextByText("15.624.822+2");
    fireEvent.click(getByText("="));
    displayTextByText("15.624.824");
  });

  it("clear display", async () => {
    const { getByTestId, getByText } = render(<App />);
    const {
      getByText: displayTextByText,
      getByTestId: displayByTestId,
    } = within(getByTestId("display"));
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("5"));
    fireEvent.click(getByText("6"));
    fireEvent.click(getByText("2"));
    displayTextByText("1.562");
    fireEvent.click(getByText("c"));
    const pText = displayByTestId("text-display") as HTMLParagraphElement;
    expect(pText.textContent).toEqual("");
  });

  it("result with number using comma", async () => {
    const { getByTestId, getByText } = render(<App />);
    const { getByText: displayTextByText } = within(getByTestId("display"));
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText(","));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("0"));
    fireEvent.click(getByText(","));
    fireEvent.click(getByText("7"));
    fireEvent.click(getByText("="));
    displayTextByText("13");
  });
});
