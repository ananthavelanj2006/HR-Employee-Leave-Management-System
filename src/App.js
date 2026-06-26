<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [search, setSearch] = useState("");

  const [leaves, setLeaves] = useState([
    { name: "Mukesh", reason: "Sick", status: "Pending" }
  ]);

  const addLeave = () => {
    if (name === "" || reason === "") {
      alert("Fill all fields");
      return;
    }

    const newLeave = {
      name,
      reason,
      status: "Pending"
    };

    setLeaves([...leaves, newLeave]);
    setName("");
    setReason("");
  };

  return (
    <div className="container">
      <h1>HR Employee Leave Management Tool</h1>

      <h2>Leave History</h2>

      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Leave Reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />

      <br /><br />

      <button onClick={addLeave}>Apply Leave</button>

      <br /><br />

      <input
        type="text"
        placeholder="Filter Employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {leaves
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.reason}</td>
                <td>{item.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
>>>>>>> b03c3f42d609379119e02228fb1d03517f62dae2
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> b03c3f42d609379119e02228fb1d03517f62dae2
