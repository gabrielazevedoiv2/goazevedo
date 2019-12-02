import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Fab, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, Card, AppBar, Box, withStyles } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import BuildIcon from '@material-ui/icons/Build';
import BrushIcon from '@material-ui/icons/Brush';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GamesIcon from '@material-ui/icons/Games';
import KeyBoardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyBoardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import GitHubIcon from '../../imgs/GitHub-Mark-64px.png';
import LinkedInSVG from '../../imgs/linkedin-brands.svg';
import image from '../../imgs/gabs.jpg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleSidebar } from '../../redux/actions';

const links = [{
    text: 'About',
    path: '/',
    icon: <InfoIcon></InfoIcon>
}, {
    text: 'Tools',
    path: '/tools',
    icon: <BuildIcon></BuildIcon>
}, {
    text: 'Games',
    path: '/games',
    icon: <GamesIcon></GamesIcon>
}, {
    text: 'Lab',
    path: '/lab',
    icon: <BrushIcon></BrushIcon>
}, {
    text: 'Blog',
    path: '/blog',
    icon: <DashboardIcon></DashboardIcon>
}];

const socialLinks = [{
    text: 'GitHub',
    icon: GitHubIcon,
    link: 'https://github.com/gabrielazevedoiv2'
}, {
    text: 'LinkedIn',
    icon: LinkedInSVG,
    link: 'https://www.linkedin.com/in/goazevedo/'
}]

const useStyles = {
    titleholder: {
        margin: 10,
    },
    title: {
        fontFamily: "'Livvic', sans-serif;"
    },
    drawer: {
        width: 300,
        flexShrink: 0,
    },
    drawerCollapsed: {
        width: 80,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 300,
        padding: '20px 0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    drawerPaperCollapsed: {
        width: 80,
        padding: '4px 0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    fab: {
        margin: '10px',
        width: 140,
        height: 140
    },
    fabCollapsed: {
        margin: '10px',
        width: 60,
        height: 60
    },
    list: {
        width: '100%'
    },
    listitem: {
        display: 'flex',
        justifyContent: 'center',
        height: '48px'
    },
    listtext: {
        display: 'flex',
        justifyContent: 'center'
    },
    brands: {
        width: 40,
    },
    menuholder: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    bottom: {
        width: '100%',
        height: 40,
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Livvic', sans-serif;"
    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '100px'
    },
    anchor: {
        backgroundColor: "purple",
        width: '20px',
    },
};

class SideBar extends React.Component { 
    render() {
        console.log(this.props)
        return (
            <div>
                <Drawer
                    className={this.props.classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: this.props.classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <div className={this.props.classes.menuholder}>
                        <div className={this.props.classes.titleholder}>
                            <Typography className={this.props.classes.title} variant={'h5'}>Gabriel Azevedo</Typography>
                            <Typography className={this.props.classes.title} variant={'p'}>FullStack Developer</Typography>
                        </div>
                        <Fab color="primary" aria-label="add" className={this.props.classes.fab}>
                            <img className={this.props.classes.img} src={image}></img>
                        </Fab>
                        <List className={this.props.classes.list}>
                            {links.map((item, index) => (
                                <Link to={item.path}>
                                    <ListItem button key={index} className={this.props.classes.listitem}>
                                        <ListItemText className={this.props.classes.listtext} primary={item.text} />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                        <div style={{width: '100%'}}>
                            <hr style={{width: '90%', border: 'none', backgroundColor: '#aaa', height: 1}}></hr>
                        </div>
                        <List className={this.props.classes.list}>
                            {socialLinks.map((item, index) => (
                                <ListItem button key={index} className={this.props.classes.listitem} style={{height: '60px'}} onClick={() => window.open(item.link)}>
                                    <img className={this.props.classes.brands} src={item.icon}></img>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <Box className={this.props.classes.bottom}>
                        {"Gabriel Azevedo 2019"}
                    </Box>
                </Drawer>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    sidebarToggle: state.sidebarToggle
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleSidebar: () => dispatch(toggleSidebar())
    }
}

const styledSidebar = withStyles(useStyles)(SideBar)

export default connect(mapStateToProps, mapDispatchToProps)(styledSidebar);