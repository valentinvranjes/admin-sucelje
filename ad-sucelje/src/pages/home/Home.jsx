import React from 'react';
import "./home.css";
import Displayedinfo from '../../components/displayedinfo/Displayedinfo';
import Chart from '../../components/chart/Chart';
import { userData } from "../../Tempdata";
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';

const Home = () => {
  return (
    <div className='home'>
      <Displayedinfo />
      <Chart data={userData} title="Analytics" grid dataKey="Active User" />
      <div className='homeWidgets'>
        <WidgetSmall />
      </div>
    </div>
  )
}

export default Home
