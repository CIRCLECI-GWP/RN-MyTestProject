import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";

import App from "../App";

it("renders the message after pressing the button", async () => {
  const { getByTestId, getByText, queryByTestId, toJSON } = render(<App />);

  const button = getByText("Say Hello");
  fireEvent.press(button);

  await waitFor(() => expect(queryByTestId("printed-message")).toBeTruthy());

  expect(getByTestId("printed-message").props.children).toBe("Hello Tester");
  expect(toJSON()).toMatchSnapshot();
});
