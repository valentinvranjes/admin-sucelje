import React from 'react';
import "./widgetSmall.css";
import NICK from '../../assets/img/Nick.png';
import MOLLY from '../../assets/img/Molly.png';
import FRANK from '../../assets/img/Frank.png';
import ELISSA from '../../assets/img/Elissa.png';
import STELLA from '../../assets/img/Stella.png';
import RALF from '../../assets/img/Ralf.png';
import { Avatar } from '@mui/material';

const WidgetSmall = () => {
  return (
    <div className="widgetSmall">
      <span className="widgetS_Title">User profiles</span>
      <ul className="widgetS_List">
        <li className="widgetS_ListItem">
          <img src= { NICK } alt="Nick C." className="widgetS_Img"/>
          <div className="widgetS_User">
            <span className="widgetS_Username">Nick C.</span>
            <span className="widgetS_UserTitle">Software Engineer</span>
          </div>
          <button className="widgetS_Button">
            <Avatar className="widgetS_Icon" />
            Info
          </button>
        </li>
        <li className="widgetS_ListItem">
          <img src= { MOLLY } alt="Molly W." className="widgetS_Img"/>
          <div className="widgetS_User">
            <span className="widgetS_Username">Molly W.</span>
            <span className="widgetS_UserTitle">Software Engineer</span>
          </div>
          <button className="widgetS_Button">
            <Avatar className="widgetS_Icon" />
            Info
          </button>
        </li>
        <li className="widgetS_ListItem">
          <img src= { FRANK } alt="Frank C." className="widgetS_Img"/>
          <div className="widgetS_User">
            <span className="widgetS_Username">Frank C.</span>
            <span className="widgetS_UserTitle">Software Engineer</span>
          </div>
          <button className="widgetS_Button">
            <Avatar className="widgetS_Icon" />
            Info
          </button>
        </li>
        <li className="widgetS_ListItem">
          <img src= { STELLA } alt="Stella D." className="widgetS_Img"/>
          <div className="widgetS_User">
            <span className="widgetS_Username">Stella D.</span>
            <span className="widgetS_UserTitle">Software Engineer</span>
          </div>
          <button className="widgetS_Button">
            <Avatar className="widgetS_Icon" />
            Info
          </button>
        </li>
        <li className="widgetS_ListItem">
          <img src= { ELISSA } alt="Elisa D." className="widgetS_Img"/>
          <div className="widgetS_User">
            <span className="widgetS_Username">Elissa D.</span>
            <span className="widgetS_UserTitle">Software Engineer</span>
          </div>
          <button className="widgetS_Button">
            <Avatar className="widgetS_Icon" />
            Info
          </button>
        </li>
        <li className="widgetS_ListItem">
          <img src= { RALF } alt="Ralf B." className="widgetS_Img"/>
          <div className="widgetS_User">
            <span className="widgetS_Username">Ralf B.</span>
            <span className="widgetS_UserTitle">Software Engineer</span>
          </div>
          <button className="widgetS_Button">
            <Avatar className="widgetS_Icon" />
            Info
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSmall
