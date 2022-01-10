import React from "react";

const api = {
  key: "2b3f83a4da0b1d3916b750a912b291b2",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app">
      <main>
        <div class="search-box">
          <input 
           type="text" 
           className="search-bar" 
           placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
