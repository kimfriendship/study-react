import React from "react";
import "./App.css";
import Book from "./Book";
import { BookProvider } from "./Context/BookContext";

function App() {
  return (
    <BookProvider>
      <Book />
    </BookProvider>
  );
}

export default App;
