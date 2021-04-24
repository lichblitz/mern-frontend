import { useState, useCallback } from "react";
import {
  makeStyles,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  FormControl,
} from "@material-ui/core";

import { create } from "application/movie-repository";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(2),
      width: 500,
    },
    title: {
      ...theme.typography.button,
      padding: theme.spacing(1),
    },
    field: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    label: {
      paddinBottom: theme.spacing(1),
    },
  };
});

const TYPES = ["Movie", "Series"];

const MovieForm = () => {
  const styles = useStyles();

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  const handleSave = useCallback(async () => {
    if (title === "" || year === "" || type === "") {
      return alert("Please, add all the information.");
    }
    await create({ title, year, type });

    alert("New Movie/Series Added");
    setTitle("");
    setYear("");
    setType("");
  });
  const handleSelect = useCallback((event) => {
    const selectedType = event.target.value;
    setType(selectedType);
  });
  const handleTitleChange = useCallback((event) => {
    setTitle(event.target.value);
  });
  const handleYearChange = useCallback((event) => {
    setYear(event.target.value);
  });

  return (
    <form className={styles.root}>
      <Typography className={styles.title}>Create Movie/series</Typography>
      <TextField
        className={styles.field}
        id="title"
        label="Title"
        onChange={handleTitleChange}
        type="text"
        value={title}
        variant="outlined"
      />
      <TextField
        className={styles.field}
        id="year"
        label="Year"
        onChange={handleYearChange}
        type="number"
        value={year}
        variant="outlined"
      />
      <FormControl className={styles.field} variant="outlined">
        <InputLabel className={styles.label} htmlFor="type">
          Type
        </InputLabel>
        <Select
          inputProps={{ name: "type-select", id: "type" }}
          onChange={handleSelect}
          value={type}
        >
          <option value={TYPES[0]}>{TYPES[0]}</option>
          <option value={TYPES[1]}>{TYPES[1]}</option>
        </Select>
      </FormControl>
      <Button color="primary" onClick={handleSave} variant="contained">
        Create
      </Button>
    </form>
  );
};

export default MovieForm;
