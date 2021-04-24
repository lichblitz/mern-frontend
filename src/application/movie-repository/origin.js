import { Axios } from "@data-provider/axios";

export const movie = new Axios({
  id: "movies",
  url: "/ ",
  initialState: {
    data: [],
  },
});

export const movieBy = new Axios({
  id: "movies",
  url: "/:type",
  initialState: {
    data: [],
  },
});
