import React from "react";
import CounterContainer from "./containers/CounterContainer.js";
import PostListContianer from "./containers/PostListContianer.js";

const App = () => {
  return (
    <>
      <CounterContainer />
      <hr />
      <PostListContianer />
    </>
  );
};

export default App;
