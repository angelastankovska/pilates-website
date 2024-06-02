import React from 'react'

function Hero() {
  return (
    <div>
        <div className="banner">
            <div className="navbar">
                <img src="../pilates-logo.jpg" alt="" />
                <ul>
                    <li>Home</li>
                    <li>Locations</li>
                    <li>Training</li>
                    <li>About</li>
                    <li>Join us</li>
                </ul>
            </div>
            <div className="content">
                <h1>Get ready to get in <span>shape</span></h1>
                <p>If you’ve been looking for a new workout routine that can give you a good balance of
                     flexibility, strength, muscle tone and help for a few aches and pains, Pilates may be the answer.</p>
                       <button>Get started</button>
            </div>
        </div>
    </div>
  )
}

export default Hero;