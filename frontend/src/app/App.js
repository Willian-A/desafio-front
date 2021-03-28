import Navbar from "./components/navbar";
import ContentSideBar from "./components/sidebar";
import PageTemplate from "./routes";

import "./css/global.css";

function App() {
  return (
    <>
      <Navbar />
      <ContentSideBar>
        <PageTemplate />
      </ContentSideBar>
    </>
  );
}

export default App;
