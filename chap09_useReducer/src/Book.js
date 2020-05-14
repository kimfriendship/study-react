import React, { useState } from "react";
import List from "./List";

const Book = () => {
  const [info, setInfo] = useState([
    { key: 1, name: "김우정", phone: "01080242242" },
  ]);

  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClick = () => {
    setInfo([
      ...info,
      { key: Math.random(), name: inputs.name, phone: inputs.phone },
    ]);
    setInputs({
      name: "",
      phone: "",
    });
  };

  return (
    <>
      <div>
        <input
          name="name"
          type="text"
          value={inputs.name}
          onChange={onChange}
        />
        <input
          name="phone"
          type="text"
          value={inputs.phone}
          onChange={onChange}
        />
        <button onClick={onClick}>등록</button>
      </div>
      <div>
        <List info={info} />
      </div>
    </>
  );
};

export default Book;
