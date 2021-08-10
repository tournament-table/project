import React from "react";
import pic from "../src/teamlogo.png";
const axios = require("axios");
const { useState, useEffect } = require("react");

function TournamentTable({ id, typeId }) {
  console.log(`ID: ${id}, TYPE:${typeId}`);

  const [info, setInfo] = useState([]);
  const url = `https://ss2.tjekscores.dk/tournaments/${id}/standings?&addResults=true&resultsLimit=6&type=${typeId}&form=last`;
  useEffect(
    () =>
      axios.get(url).then((response) => {
        setInfo(response.data);
      }),
    [url]
  );

  return (
    <table style={{ marginTop: "50px" }}>
      <thead>
        <tr>
          <th>
            <span style={{ marginRight: "5px" }}>#</span>
          </th>
          <th>
            <span>club</span>
          </th>
          <th>
            <span></span>
          </th>
          <th>
            <span style={{ marginLeft: "500px" }}>M</span>
          </th>
          <th>
            <span>W</span>
          </th>
          <th>
            <span>D</span>
          </th>
          <th>
            <span>L</span>
          </th>
          <th>
            <span>GD</span>
          </th>
          <th>
            <span>P</span>
          </th>
          <th>
            <span>Form</span>
          </th>
        </tr>
      </thead>
      <tbody style={{ alignSelf: "end" }}>
        {info.map((element) => {
          var formInspector = () => {
            return element.results.map((value) => {
              var check = value.outcome;
              if (check === "win") {
                return <span className="green"></span>;
              } else if (check === "draw") {
                return <span className="grey"></span>;
              } else if (check === "loss") {
                return <span className="red"></span>;
              }
            });
          };

          return (
            <tr>
              <td>
                <span>{element.rank}</span>
              </td>
              <td>
                <span>
                  <img src={pic} alt="club" />
                </span>
              </td>
              <td>
                <span style={{ marginLeft: "20px" }}>{element.teamName}</span>
              </td>
              <td>
                <span style={{ marginLeft: "500px" }}>
                  {element.matchesPlayed}
                </span>
              </td>
              <td>
                <span>{element.matchesWon}</span>
              </td>
              <td>
                <span>{element.matchesDraw}</span>
              </td>
              <td>
                <span>{element.matchesLost}</span>
              </td>
              <td>
                <span>
                  {element.goalsScored} - {element.goalsConceded}
                </span>
              </td>
              <td>
                <span>{element.points}</span>
              </td>
              <td style={{ display: "flex" }}>{formInspector()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TournamentTable;
