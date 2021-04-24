import { Selector } from "@data-provider/core";
import Movie from "domain/movie";
import { movie, movieBy } from "./origin";

export const getAll = new Selector(
  (queryValues) => {
    const type = queryValues.type;
    if (type) {
      return movieBy.query({ urlParams: { type: queryValues.type } });
    }
    return movie.query();
  },
  (queryValues, moviesResult) => {
    const movies = moviesResult.map((m) => {
      const movie = new Movie(m._id, m.title, m.year, m.type);
      return movie;
    });
    return movies;
  },
  {
    id: "all-movies",
    initialState: {
      data: [],
    },
  }
);

export const create = (newMovie) => {
  return movie.create(newMovie);
};
