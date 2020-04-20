import React from "react";
import { render, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { episodes } from "./components/Episodes";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

// const showData = {
//   data: {
//     name: "test",
//     summary: "just a description",
//     image: {
//       medium: "medium image",
//       original: "original image",
//     },
//     _embedded: {
//       episodes: [],
//     },
//   },
// };

jest.mock("./api/fetchShow");

test("render data when page loads", async () => {
  mockFetchShow.mockResolvedValueOnce(episodes);
  await act(async () => {
    return render(<App />);
  });
});

test("renderind episodes and seasons", async () => {
  mockFetchShow.mockResolvedValueOnce(episodes);

  // render app with no data
  const { getByText, getAllByText, debug } = render(<App />);

  // wait for data
  await waitFor(() => getByText(/fetching data.../i));

  //wait for dropdown
  await waitFor(() => getByText(/select a season/i));
  const selectSeason = getByText(/select a season/i);

  // season 5
  userEvent.click(selectSeason);
  await waitFor(() => getByText(/season 3/i));
  userEvent.click(getByText(/season 3/i));

  //asert
  expect(getAllByText(/episode/i)).toHaveLength(8);

  // season 4
  userEvent.click(selectSeason);
  await waitFor(() => getByText(/season 4/i));
  userEvent.click(getByText(/season 4/i));

  // asert
  expect(getAllByText(/episode/i)).toHaveLength(1);
});
