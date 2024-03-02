import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const VerticalNavBar = ({ onChangeExample, activeExample }) => {
  return (
    <>
      <nav className="navbar flex-column navbar-collapse navbar-dark bg-dark rounded">
        <div className="container-fluid">
          <div className="navbar-nav">
            <Link
              className={`nav-link ${
                activeExample === 'counter' ? 'active' : ''
              }`}
              onClick={() => onChangeExample('counter')}
            >
              custom Hook
            </Link>
            <Link
              className={`nav-link ${
                activeExample === 'useEffect' ? 'active' : ''
              }`}
              onClick={() => onChangeExample('useEffect')}
            >
              useState - useEffect
            </Link>
            <Link
              className={`nav-link ${
                activeExample === 'eventListener' ? 'active' : ''
              }`}
              onClick={() => onChangeExample('eventListener')}
            >
              event Listener
            </Link>
            <Link
              className={`nav-link ${
                activeExample === 'customFormHook' ? 'active' : ''
              }`}
              onClick={() => onChangeExample('customFormHook')}
            >
              custom Form Hook
            </Link>
            <Link
              className={`nav-link ${
                activeExample === 'multipleHook' ? 'active' : ''
              }`}
              onClick={() => onChangeExample('multipleHook')}
            >
              custom Form Hook
            </Link>
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
