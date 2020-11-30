import React from 'react';
import KbnButton from '../atoms/KbnButton';

function KbnLoginForm() {
    return (
        <React.Fragment>
            <label htmlFor="email">Email:</label>
            <input id="email" type="text" />
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" />
            <KbnButton value="Login" />
        </React.Fragment>
    )
}

export default KbnLoginForm