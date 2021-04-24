import { useMemo, useState, useCallback } from "react";
import { useData, useLoaded, usePolling, useError } from "@data-provider/react";

import { makeStyles, List, Typography, FormControl, InputLabel, Select } from "@material-ui/core";
import { getAll } from "application/movie-repository";

import MovieListItem from "./MovieListItem";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: theme.spacing(2),
      width: 500,
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      flexDirection: "column",
    },
    list: {},
    title: {
      ...theme.typography.button,
    },
    error: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
  };
});
const MovieList = () => {
  const styles = useStyles();
  const [filter, setFilter] = useState("");

  const dataProvider = getAll.query({ type: filter });
  const movies = useData(dataProvider);
  const loaded = useLoaded(dataProvider);
  const error = useError(dataProvider);

  usePolling(dataProvider, 500);

  const itemList = useMemo(() => {
    if (error !== null) {
      return <Typography className={styles.error}>No Data</Typography>;
    }
    return (
      <List className={styles.list}>
        {movies.map((movie) => {
          return (
            <MovieListItem
              id={movie.id}
              key={movie.id}
              title={movie.title}
              type={movie.type}
              year={movie.year}
            />
          );
        })}
      </List>
    );
  }, [movies, error, loaded]);

  const handleSelect = useCallback((event) => {
    setFilter(event.target.value);
  });

  return (
    <div className={styles.root}>
      <Typography className={styles.title}>Movies and Series</Typography>
      <FormControl className={styles.field} variant="filled">
        <InputLabel className={styles.label} htmlFor="type">
          Filter by Type
        </InputLabel>
        <Select
          inputProps={{ name: "type-select", id: "type" }}
          onChange={handleSelect}
          value={filter}
        >
          <option value="">Show all</option>
          <option value="Movie">Movies</option>
          <option value="Series">Series</option>
        </Select>
      </FormControl>

      {itemList}
    </div>
  );
};

export default MovieList;
