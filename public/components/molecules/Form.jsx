import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ method, children, className }) => (
    <form className={className} method={method}>
        {children}
    </form>
);

Form.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    method: PropTypes.string,
};

export default Form;
