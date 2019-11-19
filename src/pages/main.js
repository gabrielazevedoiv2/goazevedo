import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CustomCard from '../components/Card/card';
import Image from '../imgs/dont_just_stand.jpg';

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

export default function AboutPage(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.row}>
                <CustomCard title={"Who am I?"} content={"Gabriel Azevedo is a full-stack developer based in São Paulo state - Brazil"} width={'90%'} height={600} img={Image} imgHeight={600} imgWidth={600}></CustomCard>
            </div>
        </div>
    )
}