import { useState, useEffect } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Main5 from "./components/Main";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [responseData, setResponseData] = useState(null);

  async function handleSearch2(data) {
    setResponseData(data);
  }

  useEffect(() => {
    // console.log(responseData);
  }, [responseData]);

  return (
    <div className="App">
      <header className="App-header">
        <MyNavbar onSearch={handleSearch2}></MyNavbar>
        {responseData === null ? <Welcome /> : null}
        <Main5 coordinates={responseData}></Main5>
        <MyFooter></MyFooter>
      </header>
    </div>
  );
}

export default App;
