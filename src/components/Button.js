//_rafce
//impt
import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => { // accepts props parameters, so we destructure them as they come in 
    return (
        <button 
            onClick={onClick}
            style={{ backgroundColor: color }}
            className='btn'>
            {text}
        </button>
    )
}

// default props for if there are no input parameters
Button.defaultProps = {
    color: 'steelblue'
}

// Validator for data type of each prop
Button.propTypes = { // note the lowercase up here and uppercase down there.
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func, // Function
}
export default Button
