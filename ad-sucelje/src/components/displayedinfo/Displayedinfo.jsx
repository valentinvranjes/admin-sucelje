import React from "react";
import "./displayedinfo.css";
import {
  KeyboardArrowUpOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";

const Displayedinfo = () => {
  return (
    <div className="displayed">
      <div className="displayedItem">
        <span className="displayedTitle">Revenue</span>
        <div className="displayedMoneyContainer">
          <span className="displayedMoney1">
            7,779.29€
          </span>
          <span className="displayedMoney2">
            -7,89
            <KeyboardArrowDownOutlined className="displayedIconNegative" />
          </span>
        </div>
        <span className="displayedSub">Compared to last month</span>
      </div>
      <div className="displayedItem">
        <span className="displayedTitle">Sales</span>
        <div className="displayedMoneyContainer">
          <span className="displayedMoney1">6,599,55€</span>
          <span className="displayedMoney2">
            -1.4 <KeyboardArrowDownOutlined className="displayedIconNegative" />
          </span>
        </div>
        <span className="displayedSub">Compared to last month</span>
      </div>
      <div className="displayedItem">
        <span className="displayedTitle">Cost</span>
        <div className="displayedMoneyContainer">
          <span className="displayedMoney1">2,152.10€</span>
          <span className="displayedMoney2">
            +2.4 <KeyboardArrowUpOutlined className="displayedIcon" />
          </span>
        </div>
        <span className="displayedSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default Displayedinfo;
