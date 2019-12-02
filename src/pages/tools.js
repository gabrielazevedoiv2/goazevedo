import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingListImg from "../imgs/shopping_list.png";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const tools = [{
    name: "Shopping List",
    img: ShoppingListImg,
    desc: "Shopping List mobile App",
    link: "https://github.com/gabrielazevedoiv2/ShoppingList",
}]

const useStyles = makeStyles({
    container: {
        height: '100vh',
        display: 'flex',
        padding: '80px 0',
        flexDirection: 'column'
    },
    row: {        
      display: 'flex',
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
        objectFit: 'cover'
    },
});

export default function ToolsPage(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.row}>
                {tools.map(x => (
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={x.img}
                            title={x.name}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {x.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {x.desc}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="blue" onClick={() => window.open(x.link)}>
                                Repository
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    )
}