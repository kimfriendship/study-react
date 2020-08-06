import React, { useState } from 'react';
import axios from 'axios';

const homes = axios.create();

function App() {
  const getHome = () => {
    homes
      .get('/test/')
      .then((res) => res.data)
      .then((res) => console.log(res))
      .catch((e) => {
        console.error(e, e.message);
      });
  };

  const payload = {
    id: 1,
    title: 'my Home',
  };

  const postHome = (payload) => {
    homes
      .post('/test/post', payload)
      .then((res) => res.data)
      .then((res) => console.log(res))
      .catch((e) => {
        console.error(e, e.message);
      });
  };

  // const postHome = (id) => {
  //   homes.post('/Ex_Test/hello.do')
  //   .then(res => res.)
  // }

  return (
    <div className="App">
      <button onClick={getHome}>GET</button>
      <button
        onClick={() => {
          postHome(payload);
        }}
      >
        POST
      </button>
    </div>
  );
}

export default App;
