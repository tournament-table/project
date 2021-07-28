import "./App.css";
import React from "react";
import TournamentTable from "./tournament";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
function App() {
  return (
    <body>
      <Tabs className="tournament-menu">
        <TabList className="tab-menu">
          <Tab className="tabs">Standings</Tab>
          <Tab className="tabs">Home</Tab>
          <Tab className="tabs">Away</Tab>
        </TabList>
        <TabPanel>
          <TournamentTable id="47" />
        </TabPanel>
        <TabPanel>Home Standings</TabPanel>
        <TabPanel>Away Standings</TabPanel>
      </Tabs>
    </body>
  );
}

{
  /* <TournamentTable id="46" /> 
          <TournamentTable id="42" seasonId="869802" />
        <TournamentTable id="42" seasonId="869803" />
        <TournamentTable id="42" seasonId="869804" />
        <TournamentTable id="42" seasonId="869805" />
        <TournamentTable id="42" seasonId="869806" />
        <TournamentTable id="42" seasonId="869807" />
        <TournamentTable id="42" seasonId="869808" />
  */
}

export default App;
