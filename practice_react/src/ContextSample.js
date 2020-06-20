import React, { useState, useContext, createContext } from 'react';

const MyContext = createContext('');

const Child = () => {
  const text = useContext(MyContext);
  return <div>This is {text}</div>;
};

const Parent = () => {
  return <Child />;
};

const Grandparent = () => {
  return <Parent />;
};

const ContextSample = () => {
  const [value, setValue] = useState(true);
  return (
    <MyContext.Provider value={value ? 'Good' : 'Bad'}>
      <Grandparent />
      <button onClick={() => setValue(!value)}>Click Me</button>
    </MyContext.Provider>
  );
};

export default ContextSample;
