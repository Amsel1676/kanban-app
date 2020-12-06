import React from 'react';
import KbnLoginForm from '../molecules/KbnLoginForm';

function KbnLoginView() {
    const handleClickLogin = () => {
        console.log("onClick")
    }

    return (
        <React.Fragment>
            <h1>Kanban App</h1>
            <KbnLoginForm onClick={handleClickLogin} />
        </React.Fragment>
    )
}

export default KbnLoginView;