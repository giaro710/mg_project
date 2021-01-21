import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { sidebarData } from './sidebarData';

const Sidebar = () => {
  const [active, setActive] = useState(false);

  const setActiveLink = () => {
    setActive(false);
  };

  const renderData = () => {
    return sidebarData.map((value, key) => {
      return (
        <li key={key} className="sidebar__list--item" onClick={setActiveLink}>
          {value.icon}
          <Link
            to={value.link}
            className={`sidebar__list--item-link ${active ? 'activeLink' : ''}`}
          >
            {value.title}
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="sidebar">
      <h1 className="sidebar__title">Sidebar menu</h1>
      <ul className="sidebar__list">{renderData()}</ul>
    </div>
  );
};

export default Sidebar;

// import React from 'react';
// import './Sidebar.css';
// import SidebarLinkItem from './SidebarLinkItem';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="sidebar__list">
//         <SidebarLinkItem title={'Pratiche'} path={'/pratiche'} />
//         <SidebarLinkItem title={'Agenda'} path={'/agenda'} />
//         <SidebarLinkItem title={'Prenotazioni'} path={'/prenotazioni'} />
//         <SidebarLinkItem title={'Clienti'} path={'/clienti'} />
//         <SidebarLinkItem title={'Log Out'} path={'/logout'} />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
