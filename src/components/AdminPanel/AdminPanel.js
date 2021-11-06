import { Fragment } from "react";
import "./AdminPanel.css";
import NavigationBar from "../NavigationBar";
import DailyUpdates from "./DailyUpdates";

const AdminPanel = () => {
  return (
    <Fragment>
      <NavigationBar />
      <div className="pageHeader bg-gray-100">
        <div className="py-10 mx-20">
          <div className="py-10">Dashboard</div>
          <DailyUpdates />
        </div>
      </div>
    </Fragment>
  );
};

export default AdminPanel;
