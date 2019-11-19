import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, TextField, Typography, InputAdornment, Icon } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px'
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        width: 200,
        padding: 16
    }
}));

export default function LoginPage(props) {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.main}>
                <Typography>
                    Login
                </Typography>
                <TextField
                    id="standard-username"
                    placeholder="Username"
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">
                            <AccountCircleIcon></AccountCircleIcon>
                        </InputAdornment>,
                    }}
                />
                <TextField
                    id="standard-password"
                    placeholder="Password"
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">
                            <LockIcon></LockIcon>
                        </InputAdornment>,
                    }}
                />
            </Paper>
        </div>
    )
}