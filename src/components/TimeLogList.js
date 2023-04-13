// src/TimeLogList.js
import React, { useState, useEffect } from "react";
import TimeLog from "./TimeLog";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import moment from "moment";

function TimeLogList() {
  const [timeLogs, setTimeLogs] = useState([]);
  const [blockTime, setblockTime] = useState("");

  const timeLogsCollectionRef = collection(db, "time-logg");

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

  useEffect(() => {
    getTimeLogs();
  }, []);

  useEffect(() => {
    getTimeLogs();
  }, [timeLogs]);

  useEffect(() => {
    timeLogs.map((i) => {
      setblockTime(moment(i.date.seconds * 1000).format("L"));
    });
  }, [timeLogs]);

  return (
    <div style={{ gridColumn: "1 / 3" }}>
      <h2 className="block_time">{blockTime}</h2>
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
