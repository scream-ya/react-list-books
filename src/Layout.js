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
import BooksList from './BooksList';
import { TO_READ, IN_PROGRESS, DONE } from './constants';

const useStyles = makeStyles(() => ({
  root: {
    minWidth: '480px',
    maxWidth: '1280px',
    padding: '10px 50px',
  },
  href: {
    textDecoration: 'none',
    color: 'black',
  },
}));

function Layout() {
  const listBooks = useSelector((state) => state.listBooks);
  const classes = useStyles();
  const { pathname } = useLocation();

  const booksToRead = listBooks.filter((item) => (!item.status || item.status === TO_READ));
  const booksInProgress = listBooks.filter((item) => (item.status === IN_PROGRESS));
  const booksDone = listBooks.filter((item) => (item.status === DONE));

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  function getActiveTab() {
    switch (pathname) {
      case '/toRead': {
        return TO_READ;
      }

      case '/inProgress': {
        return IN_PROGRESS;
      }

      case '/done': {
        return DONE;
      }

      default: {
        return TO_READ;
      }
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Tabs value={getActiveTab()} indicatorColor="primary" textColor="primary">
          <Link to="/toRead" className={classes.href}>
            <Tab label={`To read (${booksToRead.length})`} {...a11yProps(TO_READ)} />
          </Link>
          <Link to="/inProgress" className={classes.href}>
            <Tab label={`In progress (${booksInProgress.length})`} {...a11yProps(IN_PROGRESS)} />
          </Link>
          <Link to="/done" className={classes.href}>
            <Tab label={`Done (${booksDone.length})`} {...a11yProps(DONE)} />
          </Link>
        </Tabs>
      </AppBar>
      <Switch>
        <Route path="/toRead">
          <TabPanel index={TO_READ}>
            <BooksList listBooks={booksToRead} nextStatus={IN_PROGRESS} />
          </TabPanel>
        </Route>
        <Route path="/inProgress">
          <TabPanel index={IN_PROGRESS}>
            <BooksList listBooks={booksInProgress} nextStatus={DONE} />
          </TabPanel>
        </Route>
        <Route path="/done">
          <TabPanel index={DONE}>
            <BooksList listBooks={booksDone} nextStatus={TO_READ} />
          </TabPanel>
        </Route>
        <Redirect from="/" to="/toRead" />
      </Switch>
    </div>
  );
}

export default Layout;
