import React from "react";
import './LandingPage.css'
import { Link } from 'react-router-dom';

function LandingPage(){
  return(
    <div>
      <div className="landing-page">
      <img className="l-page-img" src={require('./images/lens.png')}/>
      <div className="left-part">
      <h2>10x Team 04</h2>
      <Link to="/postview">
      <button className="l-page-btn">Enter</button>
    </Link>
      </div>
    </div>
    {/* <img className="b-img" src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGluc3RhZ3JhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" /> */}
    </div>
  )
}
export default LandingPage;