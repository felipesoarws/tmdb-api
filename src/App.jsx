import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Outlet />
      <p className="me">
        Made by{" "}
        <a target="_blank" href="https://github.com/felipesoarws">
          @felipesoarws
        </a>
      </p>
    </div>
  );
}

export default App;
