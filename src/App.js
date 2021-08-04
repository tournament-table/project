import "./App.css";
import React, { useEffect, useState } from "react";
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
    leagues: { EPL: 47, Suplerliga: 46, "1 Division": 85 },

    type: ["home", "away"],
  };

  const [id, setId] = useState();

  return (
    <body>
      <Tabs className="tournament-menu">
        <TabList className="tab-menu">
          <Tab className="tabs">Standings</Tab>
          <Tab className="tabs">Home</Tab>
          <Tab className="tabs">Away</Tab>
        </TabList>

        <TabPanel>
          <TournamentTable id={{ id }} typeId="" />
        </TabPanel>

        <TabPanel>
          <TournamentTable id={{ id }} typeId="home" />
        </TabPanel>

        <TabPanel>
          <TournamentTable id={{ id }} typeId="away" />
        </TabPanel>
      </Tabs>
      <label>
        Select a league
        <select onChange={setId(this.state.value)}>
          {Object.keys(obj.leagues).map((item) => {
            return <option value={obj.item}>{item}</option>;
          })}
        </select>
      </label>
    </body>
  );
}

export default App;
