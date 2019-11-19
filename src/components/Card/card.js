import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Card, CardMedia, CardContent, CardActions, CardActionArea, Button } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
      width: 345,
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%'
    }
});

export default function CustomCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.card} style={{width: props.width, height: props.height}}>
            <CardActionArea className={classes.flex}>
                <CardMedia
                    style={{height: props.imgHeight, width: props.imgWidth}}
                    image={props.img}
                    title={props.imageTitle}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.content}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}