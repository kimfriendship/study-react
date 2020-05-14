import React from "react";

const List = ({ info }) => {
  return (
    <ul>
      {info.map((i) => (
        <li key={i.key}>
          {i.name}: {i.phone}
        </li>
      ))}
    </ul>
  );
};

export default List;
