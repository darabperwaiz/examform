import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Dashboard from "./components/Dashboard/dashboard";
// import { useState } from "react";
import useToken from "./components/useToken";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
