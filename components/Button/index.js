import React from 'react'
import PropTypes from "prop-types";

const Button = ({children}) => (
	<>
    <button className='custom-button'>{children}</button>
    <style jsx>
        {
            `
            .custom-button {
                color: white;
                background: red;
            }
            `
        }
    </style>
    </>
)

Button.propTypes = {
	children: PropTypes.element,
};

Button.defaultProps = {
	children: "NGANU",
};

export default Button