import React from "react";
import { Link } from "react-router-dom";

const post = (props) => {
  return (
    <div className="col-md-4">
      <article className="post">
        <img
          src={require("../assets/images/post/" + props.id + ".jpg")}
          alt=""
        />
        <h4>{props.title}</h4>
        <p>{props.excerpt}</p>
      </article>
    </div>
  );
};

export default post;
