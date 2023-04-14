import React, { useState, useEffect } from "react";
import TimeLog from "./TimeLog";
import { db } from "../config/firebase";
import moment from "moment";
import ReactPaginate from "react-paginate";

import {
  collection,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  onSnapshot,
  getDocs,
} from "firebase/firestore";

function TimeLogList() {
  const [timeLogs, setTimeLogs] = useState([]);
  const [blockTime, setblockTime] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 5;
  const [lastDoc, setLastDoc] = useState(null);

  const timeLogsCollectionRef = collection(db, "time-logg");
  const postsQuery = query(
    timeLogsCollectionRef,
    orderBy("date", "desc"),
    limit(PER_PAGE),
    startAfter(lastDoc)
  );

  useEffect(() => {
    const getTimeLogs = async () => {
      try {
        const data = await getDocs(
          query(timeLogsCollectionRef, orderBy("date", "desc"))
        );

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

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;
  const currentPageData = timeLogs.slice(offset, offset + PER_PAGE);

  useEffect(() => {
    if (currentPageData.length > 0) {
      const firstLogDate = moment(
        currentPageData[0].date.seconds * 1000
      ).format("L");
      setblockTime(firstLogDate);
    }
  }, [currentPageData]);

  return (
    <div style={{ gridColumn: "1 / 3" }}>
      <h2 className="block_time">{blockTime}</h2>
      {currentPageData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Time Spent</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((timeLog) => (
              <TimeLog key={timeLog.id} {...timeLog} />
            ))}
          </tbody>
        </table>
      ) : (
        "Yuklenir..."
      )}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={Math.ceil(timeLogs.length / PER_PAGE)}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"previous_page"}
        nextLinkClassName={"next_page"}
        disabledClassName={"pagination_disabled"}
        activeClassName={"pagination_active"}
      />
    </div>
  );
}

export default TimeLogList;
