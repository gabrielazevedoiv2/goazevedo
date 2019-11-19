import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    row: {        
      display: 'flex',
      justifyContent: 'center',
    }
});

export default function ToolsPage(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.row}>
                Tools! (WIP)
            </div>
        </div>
    )
}