import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DodgeImg from "../../imgs/dodge_the_creeps.png";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    iframe: {
        height: '100%',
        border: 'none'
    }
});

export default function CAPage(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <iframe className={classes.iframe} src={"https://goazevedo.dev/ca"}></iframe>
        </div>
    )
}