import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const detail = query.detail === "true";

  return (
    <div>
      <h1>ABOUT</h1>
      <p>This is the page to learn react.</p>
      {detail && <p>detail is true</p>}
    </div>
  );
};

export default About;
