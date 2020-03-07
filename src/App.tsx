import { css } from "linaria";
import { modularScale, normalize } from "polished";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Crag from "./pages/Crag";
import Home from "./pages/Home";

css`
  :global() {
    ${normalize()[0]}
    ${normalize()[1]}

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

    :root {
      --sans-serif: "Inter", sans-serif;

      --size-0: ${modularScale(0)};
      --size-1: ${modularScale(1)};
      --size-2: ${modularScale(2)};
      --size-3: ${modularScale(3)};
      --size-4: ${modularScale(4)};

      --black: #333;
    }

    body {
      font-family: var(--sans-serif);
      font-size: var(--size-0);
      color: var(--black);
    }

    h1,
    h2,
    h3,
    h4 {
      margin: 0;
    }

    h4 {
      font-size: var(--size-1);
    }
    h3 {
      font-size: var(--size-2);
    }
    h2 {
      font-size: var(--size-3);
    }
    h1 {
      font-size: var(--size-4);
    }
  }
`;

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/crag/:name">
        <Crag />
      </Route>
    </Router>
  );
}

export default App;
