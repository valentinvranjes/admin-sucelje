import React from 'react'
import './sidebar.css'
import { HomeOutlined, StackedLineChartOutlined, CalendarMonthOutlined, Diversity1Outlined, QuestionAnswerOutlined, ChatOutlined, EmailOutlined, FeedOutlined, EuroOutlined, PeopleAltOutlined, CurrencyExchangeOutlined, ShoppingCartOutlined} from "@mui/icons-material";

const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapp">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
                <li className="sidebarItems">
                <HomeOutlined className='sidebarIcons'/> Home
                </li>
                <li className="sidebarItems">
                <StackedLineChartOutlined className='sidebarIcons'/> Analytics
                </li>
                <li className="sidebarItems">
                <EuroOutlined className='sidebarIcons'/> Sales
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
                <li className="sidebarItems">
                <PeopleAltOutlined className='sidebarIcons'/> Users
                </li>
                <li className="sidebarItems">
                <ShoppingCartOutlined className='sidebarIcons'/> Products
                </li>
                <li className="sidebarItems">
                <CurrencyExchangeOutlined className='sidebarIcons'/> Transactions
                </li>
                <li className="sidebarItems">
                <FeedOutlined className='sidebarIcons'/> Reports
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
                <li className="sidebarItems">
                <EmailOutlined className='sidebarIcons'/> Mail
                </li>
                <li className="sidebarItems">
                <ChatOutlined className='sidebarIcons'/> Feedback
                </li>
                <li className="sidebarItems">
                <QuestionAnswerOutlined className='sidebarIcons'/> Messages
                </li>
            </ul>
            <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                <li className="sidebarItems">
                <Diversity1Outlined className='sidebarIcons'/> Employees
                </li>
                <li className="sidebarItems">
                <CalendarMonthOutlined className='sidebarIcons'/> Calendar
                </li>
            </ul>
        </div>
        </div>
      </div>
    </div>
  )
}

export default sidebar
