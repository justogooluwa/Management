// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
     <div>
      <div className="sidebar">
        <div className="icon">
          <a href="#">
      <i class="fa-solid fa-scale-balanced"></i>
        <div className="logo">LEGAL PAD</div></a>
        </div>
        <ul  className="menu">
          <li className='active'>
            <a href="#">
          <i class="fa-solid fa-user"></i><Link to='/' className='nav-item'>Client</Link></a>
          </li>
          <li>
            <a href="#">
            <i class="fa-solid fa-person"></i><Link to='/staff' className='nav-item'>Staff</Link></a>
          </li>
          <li>
            <a href="#">
            <i class="fa-solid fa-folder"></i><Link to='/cases' className='nav-item'>Cases</Link></a>
          </li>
          <li>
            <a href="#">
            <i class="fa-solid fa-check"></i><Link to='/taskapprv' className='nav-item'>Task Approval</Link></a>
          </li>
          <li>
            <a href="#">
            <i class="fa-solid fa-list"></i><Link to='/todo' className='nav-item'>Todo List</Link></a>
          </li>
          <li>
            <a href="#">
            <i class="fa-solid fa-sitemap"></i><Link to='/tasktrans' className='nav-item'>Todo Items</Link></a>
          </li>
          <li>
            <a href="#">
            <i class="fa-solid fa-clipboard-check"></i><Link to='/taskmove' className='nav-item'>Todo Results</Link></a>
          </li>
        </ul>
      </div>
  </div>
  )
};

export default Navbar;
