import React from "react";
import { Route } from "react-router-dom";
import EachUpcoming from "../Pages/EachUpcoming";

const SubLatestRouter = () => {
  return <Route path="/:movie_id" component={EachUpcoming} />;
};

export default SubLatestRouter;
