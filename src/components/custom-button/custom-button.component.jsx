import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, handleChange, label, name, type, value, required}) => (
    <button className='custom-button' onChange={handleChange} name={name}
    type={type} value={value} required={required}>
        {children}
    </button>
)

export default CustomButton;