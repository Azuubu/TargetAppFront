import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PathConstants from '../routes/PathConstants';

const Navbar = () => {
  return (
    <>
      <h1 className="titleTag">
        <Link to={PathConstants.HOME} className="link">
          Target Product Tracker
        </Link>
      </h1>

      <nav className="navbar">
        <NavLink
          to={PathConstants.SHOW_PRODUCTS}
          className={({ isActive }) =>
            isActive ? 'activeNavLink link menuGrp' : 'link navbarLink menuGrp'
          }
        >
          Products
        </NavLink>

        <NavLink
          to={PathConstants.ADD_PRODUCT}
          className={({ isActive }) =>
            isActive ? 'activeNavLink link menuGrp' : 'link navbarLink menuGrp'
          }
        >
          Add Product
        </NavLink>

        <NavLink
          to={PathConstants.SHOW_CATEGORIES}
          className={({ isActive }) =>
            isActive ? 'activeNavLink link menuGrp' : 'link navbarLink menuGrp'
          }
        >
          Categories
        </NavLink>

        <NavLink
          to={PathConstants.ADD_CATEGORY}
          className={({ isActive }) =>
            isActive ? 'activeNavLink link menuGrp' : 'link navbarLink menuGrp'
          }
        >
          Add Category
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
