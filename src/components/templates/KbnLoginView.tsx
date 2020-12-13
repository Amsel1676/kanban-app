import React from 'react';
import KbnLoginForm from '../molecules/KbnLoginForm';
import styles from './KbnLoginView.module.css'

function KbnLoginView() {
    const handleClickLogin = () => {
        console.log("onClick")
    }

    return (
        <React.Fragment>
            <div className={styles.loginView}>
                <h1>Kanban App</h1>
                <KbnLoginForm onClick={handleClickLogin} />
            </div>
        </React.Fragment>
    )
}

export default KbnLoginView;