import { TabLink } from "react-tabs-redux";
import pic from "../src/teamlogo.png";
const axios = require("axios");
const { useState, useEffect } = require("react");

const TypeRegularStandings = (tournamentId, type) => {
  const [info, setInfo] = useState([]);
  const url =
    "https://ss2.tjekscores.dk/tournaments/".concat(tournamentId.toString()) +
    "/standings?&addResults=true&resultsLimit&type=".concat(type) +
    "&form=last";
  console.log(url);
  useEffect(
    () =>
      axios.get(url).then((response) => {
        setInfo(response.data);
      }),
    []
  );
  return (
    <tbody>
      {info.map((element) => {
        return (
          <tr>
            <td>
              <span>{element.rank}</span>
            </td>
            <td>
              <span>
                <img src={pic} />
              </span>
            </td>
            <td>
              <span style={{ marginLeft: "20px" }}>{element.teamName}</span>
            </td>
            <td>
              <span style={{ marginLeft: "255px" }}>
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
            <td>
              <span style={{ color: "red" }}>###</span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default TypeRegularStandings;
