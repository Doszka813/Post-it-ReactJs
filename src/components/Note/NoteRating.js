import React from "react";
import { Rating } from "semantic-ui-react";

const NoteRating = props => {
  return <Rating icon="star" maxRating={5} clearable size="large" />;
};

export default NoteRating;
