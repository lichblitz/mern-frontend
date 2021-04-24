import { useMemo } from "react";
import { ListItemAvatar, Avatar, ListItem, ListItemText } from "@material-ui/core";
import HdIcon from "@material-ui/icons/Hd";
import TvIcon from "@material-ui/icons/Tv";

import PropTypes from "prop-types";

const MovieListItem = ({ id, title, year, type }) => {
  const icon = useMemo(() => {
    return type === "Movie" ? <HdIcon /> : <TvIcon />;
  }, [type]);

  return (
    <ListItem>
      <ListItemAvatar id={id}>
        <Avatar>{icon}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={year} />
    </ListItem>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  year: PropTypes.number,
  type: PropTypes.string,
};

export default MovieListItem;
