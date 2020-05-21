import React from "react";
import { Route } from "react-router-dom";
import EachPopular from "../Pages/EachPopular";

const SubMainRouter = () => {
  return <Route path="/:movie_id" component={EachPopular} />;
};

export default SubMainRouter;
