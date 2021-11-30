import React from "react";
import { route } from "pages";

function App() {
  const pageRoute = route();
  return <div>{pageRoute}</div>;
}

export default App;
