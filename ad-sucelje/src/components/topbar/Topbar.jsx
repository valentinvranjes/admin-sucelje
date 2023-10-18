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
            <span className="topIconShield">7</span>
          </div>
          <div className="topbarIconContainer">
            <RecordVoiceOverOutlined />
            <span className="topIconShield">3</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsApplicationsOutlined />
          </div>
          <img src="" alt="" className="profilePicture" />
        </div> 
      </div>
    </div>
  );
};

export default Topbar;
