import React, { Component, Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios-orders";
import Loader from "../Components/Loader";
import Page from "../Layouts/Pages/Page";
import Comments from "./Comments";

const SinglePost = (props) => {
  const [post, setPost] = useState(null);
  useEffect(() => {
    const postId = props.match.params.id;
    axios.get("/posts/" + postId + ".json").then((res) => {
      console.log(res.data);
      setPost(res.data);
    });
  }, []);

  let renderPost = <Loader />;

  if (post) {
    renderPost = (
      <Fragment>
        <article className="entry-content">
          <img src={require("../assets/images/post/1.jpg")} alt="" />
          <div className="meta-tags">
            <Link to="#" className="post-meta">
              <i className="ti-time"></i>
              {post.meta.created}
            </Link>
            <Link to="#" className="post-meta">
              <i className="ti-package"></i>
              {post.meta.categories.join(", ")}
            </Link>
            <Link to="#" className="post-meta">
              <i className="ti-tag"></i>
              {post.meta.tags.join(", ")}
            </Link>
          </div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
        <Comments postId={post.id} />
      </Fragment>
    );
  }
  return <Page>{renderPost}</Page>;
};

export default SinglePost;
