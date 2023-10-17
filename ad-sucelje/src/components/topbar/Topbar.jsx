import React from "react";
import "./topbar.css";
import { NotificationsActiveOutlined, RecordVoiceOverOutlined, SettingsApplicationsOutlined } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Dash</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsActiveOutlined />
            <span className="topIconButton">7</span>
          </div>
          <div className="topbarIconContainer">
            <RecordVoiceOverOutlined />
            <span className="topIconButton">7</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsApplicationsOutlined />
            <span className="topIconButton">7</span>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Topbar;
