import { Fragment } from "react";
import "./AdminPanel.css";

import DailyUpdates from "./DailyUpdates";
import CurrentDayWidgets from "./CurrentDayWidgets";
import LiveStatus from "./LiveStatus";
import InvoiceCard from "../UI/InvoiceCard";
import Charts from "../Charts/Charts";

const AdminPanel = (props) => {
  return (
    <Fragment>
      <div className="pageHeader bg-gray-100">
        <div className="py-10 mx-20">
          <div className="grid grid-cols-2">
            <div className="py-10 justify-start">Dashboard</div>
            <div className="ml-auto mr-5">
              <button
                onClick={props.onLogout}
                className="bg-blue-600 hover:bg-blue-800 my-6 px-5 py-2 text-white text-base rounded-sm"
              >
                Logout
              </button>
            </div>
          </div>
          <DailyUpdates />
          <CurrentDayWidgets />
          <LiveStatus />
          <InvoiceCard />
          <Charts />
        </div>
      </div>
    </Fragment>
  );
};

export default AdminPanel;
