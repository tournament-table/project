import "./App.css";
import React, { useState } from "react";
import TournamentTable from "./tournament";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";

/*
Dropdown done!!!

1) pass id from  <option>{item}</option> to <TournamentTable id={id} typeId="" />

*non-prioritized*
pass type from  <option>{item}</option> to <TournamentTable id={id} typeId="" />

 */

function App() {
  var obj = {
    leagues: [
      { tournament: "EPL", id: 47, seasonId: 15382 },
      { tournament: "Suplerliga", id: 46, seasonId: 15429 },
      { tournament: "1 Division", id: 85 },
      { tournament: "Champions League", id: 42, seasonId: 15237 },
      { tournament: "Europa League", id: 73, seasonId: 15238 },
    ],

    type: ["home", "away"],
  };

  const [id, setId] = useState(47);
  const [seasonId, setSeasonId] = useState(15382);

  const idHolder = (event) => {
    console.log(event.target.value);
    setId(event.target.value);
  };

  const seasonIdHolder = (event) => {
    console.log(event.target.value);
    setSeasonId(event.target.value);
  };

  return (
    <body>
      <Tabs className="tournament-menu">
        <TabList className="tab-menu">
          <Tab className="tabs">Standings</Tab>
          <Tab className="tabs">Home</Tab>
          <Tab className="tabs">Away</Tab>
        </TabList>

        <TabPanel>
          <TournamentTable id={id} typeId="" seasonId={seasonId} />
        </TabPanel>

        <TabPanel>
          <TournamentTable id={id} typeId="home" seasonId={seasonId} />
        </TabPanel>

        <TabPanel>
          <TournamentTable id={id} typeId="away" seasonId={seasonId} />
        </TabPanel>
      </Tabs>
      <select onChange={idHolder}>
        {obj.leagues.map((item) => {
          return <option value={item.id}>{item.tournament}</option>;
        })}
      </select>
      <select onChange={seasonIdHolder}>
        return <option value={obj.leagues.seasonId}>2020/2021</option>;
      </select>
    </body>
  );
}

export default App;
