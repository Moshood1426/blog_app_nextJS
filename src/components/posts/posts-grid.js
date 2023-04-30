import React from "react";
import classes from "./posts-grid.module.css";
import PostItem from "./post-item";

const PostsGrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((item) => (
        <PostItem />
      ))}
    </ul>
  );
};

export default PostsGrid;
