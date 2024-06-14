import React from "react";
import { pendingIcon, inProgressIcon, completedIcon } from "../assets/icons";

const StatusBadges = ({ status }) => {
    if (status === "pending") {
        return (
            <div className="badge badge-pill badge-warning p-2 mt-1 rounded-[10px]">
                {pendingIcon("15px", "#fff")} <span className="ml-2">Pending</span>
            </div>
        );
    }
    if (status === "inProgress") {
        return (
            <span className="badge badge-pill badge-info p-2 mt-1 rounded-[10px]">
                {inProgressIcon("15px", "#fff")} <span className="ml-2">In Progress</span>
            </span>
        );
    }
    if (status === "completed") {
        return (
            <span className="badge badge-pill badge-success p-2 mt-1 rounded-[10px]">
                {completedIcon("15px", "#fff")} <span className="ml-2">Completed</span>
            </span>
        );
    }
};

export default StatusBadges;
