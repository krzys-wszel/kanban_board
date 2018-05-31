import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children: label, ...props }) => {
    return (
        <button {...props}>
            {label}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Button;
