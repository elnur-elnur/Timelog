// src/TimeLogList.js
import React, { useState, useEffect } from 'react';
import TimeLog from './TimeLog';

function TimeLogList() {
  const [timeLogs, setTimeLogs] = useState([]);

  useEffect(() => {
    // TODO: Fetch time logs from Firebase database and set state
  }, []);

  return (
    <div>
      {timeLogs.map(timeLog => (
        <TimeLog key={timeLog.id} {...timeLog} />
      ))}
    </div>
  );
}

export default TimeLogList;
