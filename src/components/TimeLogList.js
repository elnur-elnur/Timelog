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
  }, [timeLogsCollectionRef]);

  return (
    <div style={{ gridColumn: "1 / 3" }}>
      {timeLogs.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Time Spent</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {timeLogs.map((timeLog) => (
              <TimeLog key={timeLog.id} {...timeLog} />
            ))}
          </tbody>
        </table>
      ) : (
        "Yuklenir..."
      )}
    </div>
  );
}

export default TimeLogList;
