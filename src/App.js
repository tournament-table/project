import "./App.scss";
import React, { useState } from "react";
import TournamentStandings from "./StandingsRow";
import leagues from "./configs";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";

function App() {
  const [id, setId] = useState(46);

  const StandingIdHandler = (event) => {
    console.log(event.target.value);
    setId(event.target.value);
  };

  return (
    <body>
      <div style={{ display: "block" }}>
        <select onChange={StandingIdHandler} className="dropdown">
          {leagues.map((item) => {
            return <option value={item.id}>{item.tournament}</option>;
          })}
        </select>
        <Tabs className="tournament-menu">
          <TabList className="tab-menu">
            <Tab className="tabs">Standings</Tab>
            <Tab className="tabs">Home</Tab>
            <Tab className="tabs">Away</Tab>
          </TabList>

          <TabPanel>
            <TournamentStandings id={id} typeId="" />
          </TabPanel>

          <TabPanel>
            <TournamentStandings id={id} typeId="home" />
          </TabPanel>

          <TabPanel>
            <TournamentStandings id={id} typeId="away" />
          </TabPanel>
        </Tabs>
      </div>
    </body>
  );
}

export default App;
