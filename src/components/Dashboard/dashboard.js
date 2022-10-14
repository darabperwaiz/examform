import React, { useState } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // const [value, setValue] = useState([]);

  // const clickHandle = (e) => {
  //   console.log(e.target.value);
  //   const newValue = { "Question 1": value };
  // };

  // console.log(e.target.value);

  return (
    <div className="main_form_wrapper">
      <div className="dash_form_container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfOhBAJyvz4SXOSx2vmBOPk42yR5H5Hm1evC8lmhS_tu9HaMw/viewform?embedded=true"
          width="640"
          height="1103"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>

      <div className="export">
        <p>After Submit Download Your Response</p>
        <button
          className="down_btn"
          onClick={() =>
            openInNewTab(
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vSoG9fPhYMBYU03ggpH_yEWZb_HqU3AK7mAYqua7CiSN84JLmQQCDTWeK5ZYL9l4myB6J4_Oxwirfjl/pub?output=xlsx"
            )
          }
        >
          Export
        </button>
      </div>
    </div>
  );
}
