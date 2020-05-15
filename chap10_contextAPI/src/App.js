import React, { useState } from "react";
import "./App.css";

const initialState = {
  inputState: {
    name: "",
    phone: "",
  },
  bookState: [
    {
      _id: 0,
      name: "Woojung",
      phone: "01080242242",
    },
  ],
};

function App() {
  const [state, setState] = useState(initialState);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setState({
      inputState: { ...state.inputState, [name]: value },
      bookState: [...state.bookState],
    });
  };

  const addPhone = () => {
    const date = new Date();
    const newPhone = {
      _id: date.getTime(),
      name: state.inputState.name,
      phone: state.inputState.phone,
    };

    setState({
      inputState: initialState.inputState,
      bookState: state.bookState.concat(newPhone),
    });
  };

  return (
    <div className="App">
      <h1>무한 반복 예제 전화번호부</h1>
      이름:
      <input
        type="text"
        name="name"
        onChange={inputChange}
        value={state.inputState.name}
      />
      번호:
      <input
        type="text"
        name="phone"
        onChange={inputChange}
        value={state.inputState.phone}
      />
      <button onClick={addPhone}>번호 저장</button>
      <ul>
        {state.bookState.map((book) => {
          return (
            <li key={book._id}>
              {book.name}: {book.phone}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
