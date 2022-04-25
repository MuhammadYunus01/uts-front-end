import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className="container-hero">
        <div className="hero">
            <div className="hero-img">
                <img src="img/hero.png" alt="" />
            </div>
            <div className="hero-content">
                <h2>Covid ID</h2>
                <h2>Monitoring Covid ID</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate perferendis vel iusto rem temporibus aperiam autem modi dolor, ratione quasi assumenda, ducimus praesentium soluta est deserunt eos quam dolore?</p>
                <button>Vaccine</button>
            </div>
        </div>
    </div>
  )
}

export default Hero