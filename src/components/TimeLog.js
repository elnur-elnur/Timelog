// src/TimeLog.js
import React from "react";
import moment from "moment";

function TimeLog(props) {
  const { description, timespent, date } = props;

  return (
    <tr>
      <td>{description}</td>
      <td>{timespent}</td>
      <td>
        {moment(date.seconds * 1000).format("L")}{" "}
        {moment(date.seconds * 1000).format("LT")}
      </td>
    </tr>
  );
}

export default TimeLog;
