import React from 'react'
import './Assets/Navbar.scss'
import Lottie from 'react-lottie';
import checklist from './Assets/check-list.json';
import darkmode from './Assets/darkmode.svg'
import profile from './Assets/profile.svg'

const Navbar = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: checklist,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

  return (
    <div className='wrapper'>
        <div className="container">
            <div className="main">
                <div className="left">
                    {/* <Lottie options={defaultOptions} height={30} width={30} /> */}
                    <div className="left-title">Taskmate</div>
                </div>
                <div className="mid">
                    <div className="todo">Todo</div>
                    <div className="project">Project</div>
                    <div className="team">Team</div>
                </div>
                <div className="right">
                    
                    <img src={darkmode}/>
                    <img src={profile}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar