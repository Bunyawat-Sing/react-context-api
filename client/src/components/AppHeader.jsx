import { useContext } from "react";
import { Context } from "../App";

function AppHeader() {
  const userData = useContext(Context);

  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {userData.username}</h2>
    </div>
  );
}

export default AppHeader;
