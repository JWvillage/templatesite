import { Routes, Route } from "react-router-dom";
import { Main, Site1, Site2, Site3 } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Site1" element={<Site1 />} />
      <Route path="/Site2" element={<Site2 />} />
      <Route path="/Site3" element={<Site3 />} />
    </Routes>
  );
};

export default App;
