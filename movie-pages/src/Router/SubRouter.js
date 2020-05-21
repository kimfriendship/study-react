import React from "react";
import { Route } from "react-router-dom";
import Detail from "../Pages/Detail";

const SubRouter = () => {
  return <Route path="/:movie_id" component={Detail} />;
};

export default SubRouter;
