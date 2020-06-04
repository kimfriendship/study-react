import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostById } from "../modules/posts";
import Post from "../components/Post";

const PostContainer = ({ postId }) => {
  const { data, loading, error } = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostById(postId));
  }, [postId, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>ERROR!</div>;
  if (!data) return null;

  return <Post post={data} />;
};

export default PostContainer;
