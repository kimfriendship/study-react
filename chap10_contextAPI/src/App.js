import React from "react";
import "./App.css";
import Users from "./Users";
import { UserProvider } from "./UsersContext";

function App() {
  return (
    <UserProvider>
      <Users />
    </UserProvider>
  );
}

export default App;
