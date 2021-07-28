import pic from "../src/teamlogo.png";
const axios = require("axios");
const { useState, useEffect } = require("react");

// 46 / 15429  - superliga
// 47 / 15382  - premiere league
// 42 / 15237  - champions league
// 73 / 15238  - europe league

//869802++...(CL groups)
const RegularLeagueStandings = (tournamentId) => {
  const [info, setInfo] = useState([]);
  const url =
    "https://ss2.tjekscores.dk/tournaments/".concat(tournamentId.toString()) +
    "/standings?&addResults=true&resultsLimit=6&type&form=last";
  useEffect(
    () =>
      axios.get(url).then((response) => {
        setInfo(response.data);
      }),
    []
  );

  return info.map((element) => {
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
            <img src={pic} />
          </span>
        </td>
        <td>
          <span style={{ marginLeft: "20px" }}>{element.teamName}</span>
        </td>
        <td>
          <span style={{ marginLeft: "255px" }}>{element.matchesPlayed}</span>
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
  });
};

export default RegularLeagueStandings;
