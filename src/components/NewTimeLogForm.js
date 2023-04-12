// src/NewTimeLogForm.js
import React, { useState } from "react";

function NewTimeLogForm() {
  const [reason, setReason] = useState("");
  const [timeSpent, setTimeSpent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add new time log to Firebase database and update display
  };

  return (
    <form onSubmit={handleSubmit} className="timelog_form">
      <label>
        Description:
        <input
          type="text"
          placeholder="Description..."
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        />
      </label>
      <label>
        Time spent:
        <input
          type="text"
          placeholder="Time spent..."
          value={timeSpent}
          onChange={(event) => setTimeSpent(event.target.value)}
        />
      </label>
      <button type="submit">Add Time Log</button>
    </form>
  );
}

export default NewTimeLogForm;
