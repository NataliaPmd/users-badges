import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";

import AddBadge from "../pages/AddBadge";
import EditBadge from "../pages/EditBadge";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import BadgeDetails from "../pages/BadgeDetails";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Badges" component={Badges} />
          <Route exact path="/Badges/new" component={AddBadge} />
          <Route exact path="/Badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/Badges/:badgeId/edit" component={EditBadge} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
