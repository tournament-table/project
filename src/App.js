import "./App.css";
import React from "react";
import TournamentTable from "./tournament";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
function App() {
  return (
    <body>
      <Tabs>
        <TabList className="tablist">
          <Tab className="tabs">Standings</Tab>
          <Tab className="tabs">Home</Tab>
          <Tab className="tabs">Away</Tab>
        </TabList>
        <div className="table">
          <TabPanel>
            <TournamentTable id="47" />
          </TabPanel>
          <TabPanel>
            <TournamentTable id="47" type="home" />
          </TabPanel>
          <TabPanel>Away info</TabPanel>
        </div>
      </Tabs>
    </body>
  );
}
{
  /* <TournamentTable id="42" /> */
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
