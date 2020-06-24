import React from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from './TabPanel';

const TO_READ = 0;
const IN_PROGRESS = 1;
const DONE = 2;

const mapStateToProps = (state) => ({
  listBooks: state.listBooks,
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Layout(props) {
  const { listBooks } = props;
  const classes = useStyles();
  const { pathname } = useLocation();
  let value;

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  switch (pathname) {
    case '/toRead': {
      value = TO_READ;
      break;
    }

    case '/inProgress': {
      value = IN_PROGRESS;
      break;
    }

    case '/done': {
      value = DONE;
      break;
    }

    default: {
      value = TO_READ;
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} aria-label="simple tabs example">
          <Link to="/toRead"><Tab label="To read" {...a11yProps(TO_READ)} /></Link>
          <Link to="/inProgress"><Tab label="In progress" {...a11yProps(IN_PROGRESS)} /></Link>
          <Link to="/done"><Tab label="Done" {...a11yProps(DONE)} /></Link>
        </Tabs>
      </AppBar>
      <Switch>
        <Route path="/toRead">
          <TabPanel index={TO_READ}>
            ghgfh 1
          </TabPanel>
        </Route>
        <Route path="/inProgress">
          <TabPanel index={IN_PROGRESS}>
            klok;o 2
          </TabPanel>
        </Route>
        <Route path="/done">
          <TabPanel index={DONE}>
            qwqwqw 3
          </TabPanel>
        </Route>
        <Redirect from="/" to="/toRead" />
      </Switch>
    </div>
  );
}

export default connect(mapStateToProps)(Layout);
