import React from 'react';
import {
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from './TabPanel';
import ListBooks from './ListBooks';

const TO_READ = 0;
const IN_PROGRESS = 1;
const DONE = 2;

const useStyles = makeStyles(() => ({
  root: {
    minWidth: '480px',
    maxWidth: '1280px',
    padding: '10px 50px',
  },
}));

function Layout() {
  const listBooks = useSelector((state) => state.listBooks);
  const classes = useStyles();
  const { pathname } = useLocation();
  let value;

  const listBooksToRead = listBooks.filter((item) => !item.status || item.status === TO_READ);
  const listBooksInProgress = listBooks.filter((item) => item.status && item.status === IN_PROGRESS);
  const listBooksDone = listBooks.filter((item) => item.status && item.status === DONE);

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
      <AppBar position="static" color="transparent">
        <Tabs value={value} indicatorColor="primary" textColor="primary">
          <Link to="/toRead" style={{ textDecoration: 'none', color: 'black' }}><Tab label={`To read (${1})`} {...a11yProps(TO_READ)} /></Link>
          <Link to="/inProgress" style={{ textDecoration: 'none', color: 'black' }}><Tab label={`In progress (${1})`} {...a11yProps(IN_PROGRESS)} /></Link>
          <Link to="/done" style={{ textDecoration: 'none', color: 'black' }}><Tab label={`Done (${1})`} {...a11yProps(DONE)} /></Link>
        </Tabs>
      </AppBar>
      <Switch>
        <Route path="/toRead">
          <TabPanel index={TO_READ}>
            <ListBooks listBooks={listBooksToRead} nextStatus={IN_PROGRESS} />
          </TabPanel>
        </Route>
        <Route path="/inProgress">
          <TabPanel index={IN_PROGRESS}>
            <ListBooks listBooks={listBooksInProgress} nextStatus={DONE} />
          </TabPanel>
        </Route>
        <Route path="/done">
          <TabPanel index={DONE}>
            <ListBooks listBooks={listBooksDone} nextStatus={TO_READ} />
          </TabPanel>
        </Route>
        <Redirect from="/" to="/toRead" />
      </Switch>
    </div>
  );
}

export default Layout;
