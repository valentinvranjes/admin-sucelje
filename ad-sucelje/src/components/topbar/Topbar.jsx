import React from "react";
import "./topbar.css";
import { NotificationsActiveOutlined, RecordVoiceOverOutlined, SettingsApplicationsOutlined } from "@mui/icons-material";
import PROFILE from '../../assets/img/ProfilePicture.png';

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
          <div className="profilePicture">
          <img src={ PROFILE } alt="Profile Picture" />
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Topbar;
