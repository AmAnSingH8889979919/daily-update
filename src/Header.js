import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
 
export default function Header() {
  return (
    <div>
        <div className='header'>
            <div className='logo'>
                <h1><span>D</span>aily <span>U</span>pdate <span>?</span></h1>
            </div>
            <div className='header-list'>
                <ul>
                      <li><Link to="notes/">Today's plan</Link></li>
                    <li><Link to="/"> News</Link></li>
                    <li><Link to="news/">Weather</Link></li>

                </ul>
            </div>

        </div>
 
     </div>
  )
}
