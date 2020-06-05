import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostById, goToHome } from "../modules/posts";
import Post from "../components/Post";

const PostContainer = ({ postId }) => {
  const { data, loading, error } = useSelector(
    (state) => state.posts.post[postId] || {}
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostById(postId));
  }, [postId, dispatch]);

  if (loading && !data) return <div>Loading...</div>;
  if (error) return <div>ERROR!</div>;
  if (!data) return null;

  return (
    <>
      <button onClick={() => dispatch(goToHome())}>Go to Home</button>
      <Post post={data} />
    </>
  );
};

export default PostContainer;
