import React, { useState } from 'react';
import KbnButton from '../atoms/KbnButton';
import styles from './KbnLoginForm.module.css';

function KbnLoginForm() {
    const [emailFormValue, setEmailValue] = useState('');
    const [passwordFormValue, setPasswordValue] = useState('');
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
        if(emailValidation(emailFormValue) && passwordValidation(passwordFormValue)){
            console.log("OK")
        }else{
            console.log("NG")
            console.log(emailFormValue)
            console.log(passwordFormValue)
        }
    }

    return (
        <React.Fragment>
            <div className={styles.loginForm}>
                <div className="email-form">
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="text" value={emailFormValue} onChange={handleChangeEmailForm} required />
                    {!emailValidation(emailFormValue) &&
                        <ul className={styles.validationErrors}>
                           <li>メールアドレスの形式が不正です</li>
                       </ul>
                    }
                </div>
                <div className="password-form">
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" value={passwordFormValue} onChange={handleChangePasswordForm} required />
                    {!passwordValidation(passwordFormValue) && 
                        <ul className={styles.validationErrors}>
                            <li className={styles.validationErrors}>パスワードが入力されていません</li>
                        </ul>
                    }
                </div>
            </div>
            <KbnButton value="Login" onClick={handleClickLogin} />
        </React.Fragment>
    )
}

export default KbnLoginForm