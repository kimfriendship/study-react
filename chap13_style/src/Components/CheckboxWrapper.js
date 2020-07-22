import React, { useState } from "react";
import Checkbox from "./Checkbox";

const CheckboxWrapper = () => {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  };

  return (
    <div>
      <Checkbox checked={check} onChange={onChange}>
        all agree
      </Checkbox>
    </div>
  );
};

export default CheckboxWrapper;
