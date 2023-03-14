import React from 'react'
import './Assets/Rightbar.scss'

const Rightbar = () => {
  return (
    <div className='rightbar-wrapper'>
        <div className="rightbar-container">
            <div className="rightbar-main">
              <div className="div">Buy groceries</div>
              <div className="div">Dinner with Kate</div>
              <div className="div">Convince IEEE that i'm a good frontend dev</div>
              <div className="div">Drop them a message saying I have a really good eye for design</div>
              <div className="div">Work on motion graphics for my client who loves my work</div>
              <a href='https://notpraneeth.me' target='_blank'>This is my website</a>
            </div>
        </div>
    </div>
  )
}

export default Rightbar