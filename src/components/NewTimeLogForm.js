// src/NewTimeLogForm.js
import React, { useState } from "react";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

function NewTimeLogForm() {
  const [reason, setReason] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const timeLogsCollectionRef = collection(db, "time-logg");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (reason && timeSpent) {
        await addDoc(timeLogsCollectionRef, {
          description: reason,
          timespent: timeSpent,
          date: new Date(),
        });

        setReason("");
        setTimeSpent("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="timelog_form">
      <label className="label">
        Description
        <input
          type="text"
          placeholder="Description..."
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          className="input"
        />
      </label>
      <label className="label">
        Time spent
        <input
          type="text"
          placeholder="Time spent..."
          value={timeSpent}
          onChange={(event) => setTimeSpent(event.target.value)}
          className="input"
        />
      </label>
      <button className="btn" type="submit">
        Add Time Log
      </button>
    </form>
  );
}

export default NewTimeLogForm;
