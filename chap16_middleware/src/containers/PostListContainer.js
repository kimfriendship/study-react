import React, { useEffect } from "react";
import PostList from "../components/PostList";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../modules/posts";

const PostListContianer = () => {
  const { loading, data, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>ERROR!</div>;
  if (!data) return null;

  return <PostList posts={data} />;
};

export default PostListContianer;
