import React from 'react';
import "./home.css";
import Displayedinfo from '../../components/displayedinfo/Displayedinfo';
import Chart from '../../components/chart/Chart';

const Home = () => {
  return (
    <div className='home'>
      <Displayedinfo />
      <Chart />
    </div>
  )
}

export default Home
