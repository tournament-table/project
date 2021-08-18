import React from "react";
import logo from "../src/teamlogo.png";
import TeamResults from "./StandingsResults";
import TournamentHeaders from "./TournamentHeaders";

function TeamRow({ data }) {
  return data.map((team) => {
    return (
      <tbody>
        <tr>
          <td>
            <span>{team.rank}</span>
          </td>
          <td>
            <span>
              <img src={logo} alt="?" className="logo" />
            </span>
          </td>
          <td>
            <span style={{ marginLeft: "20px" }}>{team.teamName}</span>
          </td>
          <td>
            <span style={{ marginLeft: "500px" }}>{team.matchesPlayed}</span>
          </td>
          <td>
            <span>{team.matchesWon}</span>
          </td>
          <td>
            <span>{team.matchesDraw}</span>
          </td>
          <td>
            <span>{team.matchesLost}</span>
          </td>
          <td>
            <span>
              {team.goalsScored} - {team.goalsConceded}
            </span>
          </td>
          <td>
            <span>{team.points}</span>
          </td>
          <td style={{ display: "flex", marginTop: "5px" }}>
            <TeamResults data={team.results} />
          </td>
        </tr>
      </tbody>
    );
  });
}

export default TeamRow;
