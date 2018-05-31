import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
    if (props.type === 'textarea') {
        return <textarea {...props} />;
    } else if (props.type === 'select') {
        return (
            <select {...props}>
                {props.children}
            </select>
        );
    }
    return <input {...props} />;
};

Input.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    type: PropTypes.string,
};

export default Input;
