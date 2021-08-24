import { Button } from '@material-ui/core';
import React from 'react';

const AuthorizedStudent = ({ handleLogout }) => {

    return (
        <div className="authorized-student">
            <h1>Authorized</h1>
            <form
                onSubmit={handleLogout}
            >
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Sign Out
                </Button>
            </form>
        </div>
    )
}

export default AuthorizedStudent
