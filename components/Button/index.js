import React from 'react'
import './button.scss'

const Button = ({message}) => (
	<button>{message}</button>
)

Button.propTypes = {
	message: PropTypes.string,
};

Button.defaultProps = {
	message: "Nganu",
};


export default Button