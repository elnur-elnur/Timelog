// src/TimeLogList.js
import React, { useState, useEffect } from "react";
import TimeLog from "./TimeLog";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

function TimeLogList() {
  const [timeLogs, setTimeLogs] = useState([]);

  const timeLogsCollectionRef = collection(db, "time-logg");

  useEffect(() => {
    // TODO: Fetch time logs from Firebase database and set state
    const getTimeLogs = async () => {
      try {
        const data = await getDocs(timeLogsCollectionRef);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTimeLogs(filteredData);
      } catch (error) {
        console.log(error);
      }
    };

    getTimeLogs();
  }, []);

  return (
    <div>
      {timeLogs.map((timeLog) => (
        <TimeLog key={timeLog.id} {...timeLog} />
      ))}
    </div>
  );
}

export default TimeLogList;
