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

    const emailValidation = (value: string) => {
        return REGAX_EMAIL.test(value) && value !== ''
    }

    const passwordValidation = (value: string) => {
        return value !== ''
    }

    const handleClickLogin = () => {
        if(emailValidation(emailForm) && passwordValidation(passwordForm)){
            console.log("OK")
        }else{
            console.log("NG")
            console.log(emailForm)
            console.log(passwordForm)
        }
    }

    return (
        <React.Fragment>
            <div className={styles.loginForm}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="text" value={emailForm} onChange={handleChangeEmailForm} required />
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" value={passwordForm} onChange={handleChangePasswordForm} required />
            </div>
            <KbnButton value="Login" onClick={handleClickLogin} />
        </React.Fragment>
    )
}

export default KbnLoginForm