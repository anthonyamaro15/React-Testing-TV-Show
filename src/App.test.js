import React from "react";
import { render, waitFor, act, queryAllByTestId } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Dropdown from "./App";
import { episodes, shows } from "./api/EpisodesData";

import { fetchShow as mockFetchShow } from "./api/fetchShow";

// console.log("espidoes here, ", episodes);

jest.mock("./api/fetchShow");

test("renderind episodes and seasons", async () => {
  mockFetchShow.mockResolvedValueOnce(episodes);

  // render app with no data
  const { getByText, queryAllByTestId } = render(<App />);

  await waitFor(() => getByText(/fetching data.../i));

  await waitFor(() => queryAllByTestId(/select a season/i));
  const selectSeason = queryAllByTestId(/select a season/i);

  //   userEvent.click(selectSeason);
  //   await wait(() => getByText(/season 1/i));
  //   userEvent.click(getByText(/season 1/i));
  //   //Assert
  //   expect(getAllByText(/episode/i)).toHaveLength(8);

  //   // Wait for data to load and Dropdown to show in other to select season and episodes

  //   //season 2 with Episodes
  //   userEvent.click(selectSeason);
  //   await waitFor(() => getByText(/season 2/i));

  //   userEvent.click(getByText(/season 2/i));

  //   //Assert
  //   expect(getAllByText(/episode/i)).toHaveLength(9);

  //   // wait for data
  //   await waitFor(() => getByText(/fetching data.../i));

  //   //wait for dropdown
  //   await waitFor(() => queryAllByTestId(/options/i));
  //   const selectSeason = queryAllByTestId(/options/i);

  // season 5
  //   await userEvent.click(selectSeason);
  //   await waitFor(() => getByText(/season 3/i));
  //   userEvent.click(getByText(/season 3/i));

  //   //asert
  //   expect(getAllByText(/episode/i)).toHaveLength(8);

  //   // season 4
  //   userEvent.click(selectSeason);
  //   await waitFor(() => getByText(/season 4/i));
  //   userEvent.click(getByText(/season 4/i));

  //   // asert
  //   expect(getAllByText(/episode/i)).toHaveLength(1);
});
