import { Button, } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react'
import { Grid,GridItem } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'red',
    },
});

export default () => {
    const [emailAddress, setEmailAddress] = useState('')
    const [password, SetPassword] = useState('')
    const [redirectToDashBoard, SetRederictToDashboard] = useState(false);
    const classes = useStyles();


    return (
        <Grid container spacing={1}
            className={classes.root}
        >
            <Grid item xs={2} sm={9} md={9}
                className={classes.root}

            >
                <img src="https://fontmeme.com/images/Dunkin%E2%80%99-Donuts-Logo.jpg" alt="" />
            </Grid>
            <Grid item xs={10} sm={3} md={3}>
            <div>
                    <input
                        type="text"
                        data-testid="emailAddressText"
                        value={emailAddress}
                        onChange={e => setEmailAddress(e.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        data-testid="passwordText"
                        name="passwordText"
                    />
                    <br/>
                    <Button
                        data-testid="submitButton"
                        className="submitButton"
                        onClick={() => {}}
                    >
                        LOGIN
                        </Button>
                    </div>
                </Grid >
        </Grid>
       
    )
 
}

