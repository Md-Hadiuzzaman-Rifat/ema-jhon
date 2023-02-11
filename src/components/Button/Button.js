import React from 'react';
import "./button.css";




const Button = ({children ,font, ...rest}) => {
    return (
        <div>
            <button className={`btn`} style={font} {...rest}>{children}</button>
        </div>
    );
};

export default Button;