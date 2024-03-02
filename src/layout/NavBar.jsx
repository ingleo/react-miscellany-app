import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Hooks
          </Link>
          <div className="navbar-collapse">
            <div className="navbar-nav">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                to="/"
              >
                Several
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                to="/reducer"
              >
                Reducer
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                to="/context"
              >
                Context
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
