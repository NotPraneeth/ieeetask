import React from 'react'
import './Assets/Sidebar.scss'
import today from './Assets/today.svg'
import myday from './Assets/myday.svg'
import important from './Assets/icons8-important-event-50.png'
import settings from './Assets/settings.svg'

const Sidebar = () => {
  return (
    <div className='sidebar-wrapper'>
        <div className="sidebar-container">
            <div className="sidebar-main">
                <div className="top-container ">
                  <div className="today-container custom-flex">
                    <img src={today}/>
                    <div className="today-text">Today</div>
                  </div>
                  <div className="myday-container custom-flex">
                    <img src={myday}/>
                    <div className="myday-text">My day</div>
                  </div>
                  <div className="important-container custom-flex">
                    <img id="important-icon" src={important}/>
                    <div className="important-text">Important</div>
                  </div>
                </div>
                <div className="bot-container custom-flex">
                  <img src={settings}/>
                  <div className="bot-text">Settings</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar