// src/TimeLog.js
import React, { useEffect, useState } from "react";
import moment from "moment";

function TimeLog(props) {
  const { description, timespent, date } = props;
  // const [first, setfirst] = useState([]);

  // useEffect(() => {
  //   let newDate = new Date();
  //   let date = newDate.prototype.getDate;
  //   let _date = date(date.seconds * 1000);
  //   setfirst(_date.getDate);
  // }, [props]);

  return (
    <tr>
      {/* <h2 style={{ fontWeight: "bold", fontSize: "30px" }}>
        {moment(date.seconds * 1000).format("L")}
      </h2> */}
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
