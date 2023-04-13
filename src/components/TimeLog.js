// src/TimeLog.js
import React from "react";

function TimeLog(props) {
  const { description, timespent } = props;

  return (
    <div>
      <p>{description}</p>
      <p>{timespent}</p>
    </div>
  );
}

export default TimeLog;
