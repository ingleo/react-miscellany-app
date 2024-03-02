import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const VerticalNavBar = ({ onChangeExample, activeExample }) => {
  const examplesList = [
    { component: 'customHook', menu_title: 'custom Hook' },
    { component: 'useEffect', menu_title: 'useState - useEffect' },
    { component: 'eventListener', menu_title: 'event Listener' },
    { component: 'customFormHook', menu_title: 'custom Form Hook' },
    { component: 'multipleHooks', menu_title: 'multiple Hooks' },
    { component: 'useRef', menu_title: 'useRef' },
    { component: 'useLayoutEffect', menu_title: 'useLayoutEffect' },
    { component: 'reactMemo', menu_title: 'memo' },
    { component: 'useMemo', menu_title: 'useMemo' },
    { component: 'useCallback', menu_title: 'useCallback' },
  ];
  return (
    <>
      <nav className="navbar flex-column navbar-collapse navbar-dark bg-dark rounded">
        <div className="container-fluid">
          <div className="navbar-nav">
            {examplesList.map(({ component, menu_title }) => (
              <Link
                key={component}
                className={`nav-link ${
                  activeExample === component ? 'active' : ''
                }`}
                onClick={() => onChangeExample(component)}
              >
                {menu_title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

VerticalNavBar.propTypes = {
  onChangeExample: PropTypes.func.isRequired,
  activeExample: PropTypes.string.isRequired,
};
