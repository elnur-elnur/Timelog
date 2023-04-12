import React from "react";
import TimeLogList from "./components/TimeLogList";
import NewTimeLogForm from "./components/NewTimeLogForm";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="project_title">My time log</h1>
      <div className="app-body">
        <TimeLogList />
        <NewTimeLogForm />
      </div>
    </div>
  );
}

export default App;
