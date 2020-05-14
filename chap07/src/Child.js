import React from "react";

const Child = ({ lotto }) => {
  return (
    <>
      <h2>자식 컴포넌트</h2>
      <div>
        {lotto.map((lt, i) =>
          i === 6 ? <span>{lt}</span> : <span>{lt + ","}</span>
        )}
      </div>
    </>
  );
};

export default Child;
