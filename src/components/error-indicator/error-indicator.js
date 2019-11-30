import React from 'react';
import './error-indicator.scss';
import icon from './error-icon';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon" />
            <span className="error">Oops!</span>
            <span>something has gone terribly wrong</span>
            <span>(but we are already working on it)</span>
        </div>
    );
};

export default ErrorIndicator;