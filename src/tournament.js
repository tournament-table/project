import React from "react";
import regularLeagueStandings from "./regularLeagueStandings";
import topLeagueStandings from "./topLeagueStandings";
import homeregularLeagueStandings from "./typeRegStands";

function TournamentTable(props) {
  var a = props.id;
  var b = props.seasonId;
  var c = props.type;

  return (
    <table>
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
          <th style={{ textAlign: "right" }}>
            <span>M</span>
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
      {regularLeagueStandings(a)}
      {homeregularLeagueStandings(a, props.type)}
      {topLeagueStandings(a, b)}
    </table>
  );
}

export default TournamentTable;
