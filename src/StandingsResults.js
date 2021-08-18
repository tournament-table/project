import React from "react";

function TeamResults({ data }) {
  return data.map((result) => {
    return <span className={`results ${result.outcome}`}></span>;
  });
}

export default TeamResults;
