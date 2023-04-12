// src/TimeLog.js
import React from 'react';

function TimeLog(props) {
  const { reason, timeSpent, datetime } = props;

  return (
    <div>
      <p>{reason}</p>
      <p>{timeSpent}</p>
      <p>{datetime}</p>
    </div>
  );
}

export default TimeLog;
