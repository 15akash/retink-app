import { Fragment } from "react";
import "./AdminPanel.css";
import NavigationBar from "./NavigationBar";

function AdminPanel() {
  return (
    <Fragment>
      <NavigationBar />
      <div className="adminPanel">Dashboard</div>
    </Fragment>
  );
}

export default AdminPanel;
