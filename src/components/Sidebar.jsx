import React, { useState } from "react";
import "./Sidebar.css";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const ToggleSidebar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="sideBtn btn btn-primary" onClick={ToggleSidebar}>
          {!isOpen ? (
            <KeyboardArrowLeftRoundedIcon />
          ) : (
            <KeyboardArrowRightOutlinedIcon />
          )}
        </div>
        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="sd-body">
            <ul>
              <CalendarMonthOutlinedIcon sx={{ margin: "10px 0" }} />
              <EditNoteOutlinedIcon sx={{ margin: "10px 0" }} />
              <AddTaskOutlinedIcon sx={{ margin: "10px 0" }} />
              <PersonOutlineOutlinedIcon sx={{ margin: "10px 0" }} />
              <LocationOnOutlinedIcon sx={{ margin: "10px 0" }} />
              <AddOutlinedIcon sx={{ margin: "10px 0" }} />
            </ul>
          </div>
        </div>
        {/* <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div> */}
      </div>
    </>
  );
};

export default ToggleSidebar;
