const axios = require("axios");
const { useState, useEffect } = require("react");

const TitleTop = (tournamentId, seasonId) => {
  const [info, setInfo] = useState([]);
  const url =
    "https://ss2.tjekscores.dk/tournaments/".concat(tournamentId.toString()) +
    "/standings?&addResults=true&resultsLimit&type&form=lastt&stageId="
      .concat(seasonId)
      .toString();

  useEffect(
    () =>
      axios.get(url).then((response) => {
        setInfo(response.data);
      }),
    []
  );

  return <caption>a</caption>;
};

export default TitleTop;
