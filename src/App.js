import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './App.css';
import { theme } from './material-ui/theme';
import learningsReducer from './redux/reducer';
import CustomAppBar from './components/appbar/appbar';
import MainPage from './pages/main';
import { Grid, Container } from '@material-ui/core';
import SideBar from './components/sidebar/sidebar';
import ToolsPage from './pages/tools';
import LabsPage from './pages/labs';
import BlogsPage from './pages/blog';

const appStore = createStore(learningsReducer);

const useStyles = makeStyles(theme => ({
  layout: {
    display: 'flex',
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={appStore}>
          <div className={classes.layout}>
            <Router>
              <SideBar title={"You just landed"}></SideBar>
              <Container>
                <Route path="/" exact component={MainPage}></Route>   
                <Route path="/tools" exact component={ToolsPage}></Route>   
                <Route path="/lab" exact component={LabsPage}></Route>   
                <Route path="/blog" exact component={BlogsPage}></Route>   
              </Container>
            </Router>
          </div>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
