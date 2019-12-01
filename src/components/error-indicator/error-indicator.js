import React from 'react';
import './error-indicator.scss';
import icon from './error-icon.png';

const ErrorIndicator = ({ error }) => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon" />
            <span className="error">Oops!</span>
            <span>{error}</span>
            <span>(we are already working on it)</span>
        </div>
    );
};

export default ErrorIndicator;