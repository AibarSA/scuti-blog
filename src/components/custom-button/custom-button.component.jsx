import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, handleChange,googleSignIn,goToCheckout,inverted,addItemToCart, label, name, type, value, required}) => (
    <button className={
        `${inverted ? 'inverted' : ''} 
        ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onChange={handleChange} name={name}
    type={type} value={value} required={required} onClick={ 
        googleSignIn ? googleSignIn : goToCheckout ? goToCheckout :  addItemToCart}>
        {children}
    </button>
)

export default CustomButton;