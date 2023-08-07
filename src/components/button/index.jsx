import React from "react";

function Button({ children, className, onClick }) {
    let classNameFinal = "btn-sm mx-1 " + className;
	return (
		<button className={classNameFinal} onClick={onClick}>
			<span className="material-symbols-outlined">{children}</span>
		</button>
	);
}

export default Button;
