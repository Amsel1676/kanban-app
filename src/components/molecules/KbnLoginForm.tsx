import React, { useState } from 'react';
import KbnButton from '../atoms/KbnButton';
import styles from './KbnLoginForm.module.css';

function KbnLoginForm() {
    const [emailForm, setEmailValue] = useState('');
    const [passwordForm, setPasswordValue] = useState('');
    const REGAX_EMAIL = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const handleChangeEmailForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(event.target.value)
    }

    const handleChangePasswordForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(event.target.value)
    }

    return (
        <React.Fragment>
            <div className={styles.loginForm}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="text" value={emailForm} onChange={handleChangeEmailForm} />
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" value={passwordForm} onChange={handleChangePasswordForm} />
            </div>
            <KbnButton value="Login" />
        </React.Fragment>
    )
}

export default KbnLoginForm