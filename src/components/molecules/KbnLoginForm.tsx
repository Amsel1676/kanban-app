import React, { useState } from 'react';
import KbnButton from '../atoms/KbnButton';
import styles from './KbnLoginForm.module.css';

function KbnLoginForm(props: KbnLoginFormProps) {
    const [emailFormValue, setEmailValue] = useState('');
    const [passwordFormValue, setPasswordValue] = useState('');
    const REGAX_EMAIL = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const handleChangeEmailForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(event.target.value)
    }

    const handleChangePasswordForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(event.target.value)
    }

    const required = (value: string) => {
        return !!value.trim()
    }

    const emailValidation = (value: string) => {
        return REGAX_EMAIL.test(value) && required(value)
    }

    const passwordValidation = (value: string) => {
        return required(value)
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
            <KbnButton value="Login" onClick={props.onClick} />
        </React.Fragment>
    )
}

export interface KbnLoginFormProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
  

export default KbnLoginForm