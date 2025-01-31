import React, { useEffect, useState } from "react";
import classes from '../styles/Posts.module.css';
import GetPosts from "../API/GetPosts";
import Loader from "./UI/Loader/Loader";

import img from '../images/profile.svg'
import Post from "./UI/Post/Post";


function Posts() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    setIsLoading(true)
    const response = await GetPosts.getPosts();
    setPosts(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={classes.PostsContent}>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={classes.postsList}>
          {posts.map(post =>
            <Post
              content={post.content}
              author_id={post.userId}
              author={post.author_name}
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.updatedAt}
              currentClass="post"
              avatar={img}
            />
          )}
        </ul>
      )}
    </div>
  )
}

export default Posts;