import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CharacterList from "./components/pages/CharacterList";

function Router(props) {
  return (
    <BrowserRouter>
      <Route exact path="/" component={CharacterList} />
      {/* <Route exact path="/characterList" component={SetupAccess} /> */}
    </BrowserRouter>
  );
}

export default Router;
