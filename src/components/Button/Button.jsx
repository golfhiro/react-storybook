import './Button.css';
import PropTypes from 'prop-types';

function Button({ 
    children, 
    color = 'default', 
    size = 'base',
    backgroundColor,
}) {
    return (
    <button 
        className={`${color} ${size}`}
        style={backgroundColor && {backgroundColor}}
    >
        {children}
    </button>);
}
  
export default Button;

Button.propTypes = {
    color: PropTypes.oneOf(['primary', 'default', 'danger']),
    size: PropTypes.oneOf(['sm', 'base', 'lg'])
}