import React from 'react';
import './spinner.scss';

const Spinner = () => {
    const styleLoader = {
        width: '100 %',
        height: '100 %'
    }
    return (
        <div className="loader-wrapper">
            <div style={styleLoader} className="lds-double-ring">
                <div></div>
                <div></div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;