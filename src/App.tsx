import React from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "./reducers/fetchNews";
import { AppDispatch } from "./store/store";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => dispatch(fetchNews());
  return (
    <div className="App">
      <header className="App-header">
        <p>Congratulations! Your App is live. Start working.</p>
        <button type="button" onClick={handleClick}>
          loadddd
        </button>
      </header>
    </div>
  );
};

export default App;
