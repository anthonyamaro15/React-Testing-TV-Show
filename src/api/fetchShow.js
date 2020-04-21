import axios from "axios";

export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      console.log("response from fetchShow ", res);
      return res;
    })
    .catch((err) => {
      return err;
    });
};

// Your challenge for this module: write tests for both the App.js component and the Episodesjs component.Take note of where the state is being managed, where the async call is, and where different data peices are being rendered.Understanding all of this will be important so you know how to test each component.
