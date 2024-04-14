import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProfilePage from "./ProfilePage"; // 引入ProfilePage组件

function App() {
  return (
    <div className="App">
      {/* ProfilePage组件将被渲染在这里 */}
      <ProfilePage />
    </div>
  );
}

export default App;
