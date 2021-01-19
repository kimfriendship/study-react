import React from 'react';
import './App.css';
import { SampleProvider } from './ContextSample';
import Counter from './Counter';
import Greetings from './Greetings';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';

function App() {
  const onClick = (name: string) => {
    console.log(name);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <>
      <SampleProvider>
        <Greetings name="Woojung" onClick={onClick} />
        <hr />
        <Counter />
        <hr />
        <MyForm onSubmit={onSubmit} />
        <hr />
        <ReducerSample />
      </SampleProvider>
    </>
  );
}

export default App;
