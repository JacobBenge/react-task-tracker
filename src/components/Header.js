//_rafce
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation(); // grabs the pathname

    return (
        <header className='header'>
            <h1>{title}</h1>
            {/* Inline CSS uses double curly braces and camelCase (see background-color) */}
            {/* <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1> */}
            {/* Embedded CSS see also the headingStyle definition at bottom of page*/}
            {/* <h1 style={headingStyle}>{title}</h1> */}
            {location.pathname === '/' && ( 
                // only show the button when on the home page. Don't show when on the about us page
                <Button
                    color={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Close' : 'Add'}
                    onClick={onAdd}
                />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

// Validator for data type of each prop
Header.propTypes = { // note the lowercase up here and uppercase down there.
    title: PropTypes.string.isRequired, // Must be a string and is required
}

// Embedded Styles
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header
