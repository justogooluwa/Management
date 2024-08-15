import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isCasesDropdownOpen, setIsCasesDropdownOpen] = useState(false);
  const [isFilesDropdownOpen, setIsFilesDropdownOpen] = useState(false);
  const [isTransactionsDropdownOpen, setIsTransactionsDropdownOpen] = useState(false);
  const [isPropertiesDropdownOpen, setIsPropertiesDropdownOpen] = useState(false);

  const toggleCasesDropdown = () => {
    setIsCasesDropdownOpen(!isCasesDropdownOpen);
    setIsFilesDropdownOpen(false); // Close Files dropdown
    setIsTransactionsDropdownOpen(false); // Close Transactions dropdown
    setIsPropertiesDropdownOpen(false); // Close Properties dropdown
  };

  const toggleFilesDropdown = () => {
    setIsFilesDropdownOpen(!isFilesDropdownOpen);
  };

  const toggleTransactionsDropdown = () => {
    setIsTransactionsDropdownOpen(!isTransactionsDropdownOpen);
  };

  const togglePropertiesDropdown = () => {
    setIsPropertiesDropdownOpen(!isPropertiesDropdownOpen);
  };

  return (
    <div>
      <div className="sidebar">
        <div className="icon">
          <a href="#">
            <i className="fa-solid fa-scale-balanced"></i>
            <div className="logo">LEGAL PAD</div>
          </a>
        </div>
        <ul className="menu">
          <li>
            <a href="#" onClick={toggleCasesDropdown}>
              <i className="fa-solid fa-folder"></i>
              Cases
            </a>
            {isCasesDropdownOpen && (
              <ul className="menu">
                <li>
                  <a href="#" onClick={toggleFilesDropdown}>
                    Files
                  </a>
                  {isFilesDropdownOpen && (
                    <ul className="menu">
                      <li><Link to="/" className="nav-item">Client</Link></li>
                      <li><Link to="/staff" className="nav-item">Staff</Link></li>
                      <li><Link to="/taskapprv" className="nav-item">Task Approval</Link></li>
                      <li><Link to="/todo" className="nav-item">Todo List</Link></li>
                    </ul>
                  )}
                </li>
                <li>
                  <a href="#" onClick={toggleTransactionsDropdown}>
                    Transactions
                  </a>
                  {isTransactionsDropdownOpen && (
                    <ul className="menu">
                      <li><Link to="/tasktrans" className="nav-item">Todo Items</Link></li>
                      <li><Link to="/taskmove" className="nav-item">Todo Results</Link></li>
                    </ul>
                  )}
                </li>
                <li>
                  <a href="#" onClick={togglePropertiesDropdown}>
                    Reports
                  </a>
                  {isPropertiesDropdownOpen && (
                    <ul className="menu">
                      <li><Link to="/property1" className="nav-item">Property 1</Link></li>
                      <li><Link to="/property2" className="nav-item">Property 2</Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
