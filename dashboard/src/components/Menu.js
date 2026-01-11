import React, { useState } from "react";
 import { Link} from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);
   const handleProfileClick = () => {
       setIsProfileDropDownOpen(isProfileDropDownOpen);
    };
    const handleDashboard = (index) => {
      setSelectedMenu(index);
    };
    const menuClass="menu"
    const activeMenu="menu selected"
  return (
   
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleDashboard(0)}>
            <p className={selectedMenu === 0 ? activeMenu: menuClass}>Dashboard</p>
            </Link>
            
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleDashboard(1)}>
            <p className={selectedMenu === 1 ? activeMenu: menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleDashboard(2)}>
            <p className={selectedMenu === 2 ? activeMenu: menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleDashboard(3)}>
            <p className={selectedMenu === 3 ? activeMenu: menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>handleDashboard(4)}>
            <p className={selectedMenu === 4 ? activeMenu: menuClass}>Funds</p>
            </Link>
          </li>
          <li>
           <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handleDashboard(5)}>
            <p className={selectedMenu === 5 ? activeMenu: menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
