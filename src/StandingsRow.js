import React from "react";
import TournamentHeaders from "./TournamentHeaders";
import TeamRow from "./TeamRow";
import Loader from "react-loader-spinner";
const axios = require("axios");
const { useState, useEffect } = require("react");

function TournamentStandings({ id, typeId }) {
  let [data, setData] = useState([]);
  let [loaderVisibility, setloaderVisibility] = useState();
  const url = `https://ss2.tjekscores.dk/tournaments/${id}/standings?&addResults=true&resultsLimit=6&type=${typeId}&form=last`;
  useEffect(
    () =>
      axios.get(url).then((response) => {
        setloaderVisibility(true); // loader always activates due to the new url
        setTimeout(() => {
          setData(response.data);
          setloaderVisibility(false); // loader stops due
        }, 2000);
      }),
    [url]
  );

  return (
    <div
      style={{
        margin: "50px 0 0 100px",
      }}
    >
      {loaderVisibility ? (
        <div className="loader">
          <Loader
            visible={loaderVisibility}
            type="Circles"
            color="rgb(67, 125, 212)"
          />
        </div>
      ) : (
        <table>
          <TournamentHeaders />
          <TeamRow data={data} />
        </table>
      )}
    </div>
  );
}

export default TournamentStandings;
