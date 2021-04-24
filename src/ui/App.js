import { makeStyles } from "@material-ui/core";

import MovieForm from "ui/modules/movie-form";
import MovieList from "ui/modules/movie-list";

const useStyles = makeStyles({
  root: {},
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MovieForm />
      <MovieList />
    </div>
  );
};

export default App;
