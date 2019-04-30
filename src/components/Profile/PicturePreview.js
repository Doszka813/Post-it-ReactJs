import React from "react";
import "../../styles/Preview.css";

const PicturePreview = props => {
  return props.imageUrl === null ? null : (
    <img alt="profile_picture" className="Image" src={props.imageUrl} />
  );
};

export default PicturePreview;
