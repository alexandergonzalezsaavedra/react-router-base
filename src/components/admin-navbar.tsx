import { NavLink } from 'react-router';
import type { NavItem } from '../types/navitems';

const navItems: NavItem[] = [
  {
    to: '/admin/dashboard',
    label: 'Dashboard',
    icon: 'bi bi-speedometer2',
  },
  {
    to: '/admin/profile',
    label: 'Profile',
    icon: 'bi bi-person',
  },
];

const getNavClass = (isActive: boolean) =>
  `nav-link ${isActive ? 'active bg-warning' : ''}`;

const getNavStyle = (isActive: boolean) => ({
  color: isActive ? 'white' : 'black',
  textShadow: isActive ? '0 2px 2px rgba(0,0,0,.3)' : 'none',
  fontWeight: isActive ? 'normal' : 'lighter',
});

const AdminNavbar = () => {
  return (
    <nav>
      <ul className='nav nav-pills'>
        {navItems &&
          navItems.map((item, index) => (
            <li
              className='nav-item'
              key={index}
            >
              <NavLink
                className={({ isActive }) => getNavClass(isActive)}
                style={({ isActive }) => getNavStyle(isActive)}
                to={item.to}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default AdminNavbar;
