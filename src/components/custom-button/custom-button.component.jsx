import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, handleChange,googleSignIn, label, name, type, value, required}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onChange={handleChange} name={name}
    type={type} value={value} required={required} onClick={googleSignIn}>
        {children}
    </button>
)

export default CustomButton;