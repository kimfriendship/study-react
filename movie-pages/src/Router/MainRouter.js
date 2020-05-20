import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../Pages/Main";
import About from "../Pages/About";
import Latest from "../Pages/Latest";
import Search from "../Pages/Search";

const MainRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/latest" component={Latest} />
        <Route path="/search" component={Search} />
        <Route path="/about" component={About} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default MainRouter;
