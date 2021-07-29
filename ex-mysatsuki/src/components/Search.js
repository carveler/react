import React from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../actions/filterAction';
import { menu } from '../dummyData.json';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import {
  AppBar,
  InputBase,
  Tabs,
  Tab,
  Typography,
  Box,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  // search: {
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: fade(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: fade(theme.palette.common.white, 0.25),
  //   },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing(3),
  //     width: 'auto',
  //   },
  // },
  // searchIcon: {
  //   padding: theme.spacing(0, 2),
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const Search = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const categoryArr = Object.keys(menu);
  return (
    <>
      <div className={classes.root}>
        <AppBar position='static' color='default'>
          <div className={classes.search}>
            <div className={classes.searchIcon}>{/* <SearchIcon /> */}</div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => dispatch(search(e.target.value))}
            />
          </div>

          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='scrollable'
            scrollButtons='auto'
            aria-label='scrollable auto tabs example'
          >
            <Tab
              // component='a'
              // href='#'
              label='ALL MENU'
              {...a11yProps(0)}
              onClick={() => dispatch(search(''))}
            />
            {categoryArr.map((category, index) => {
              return (
                <Tab
                  label={category}
                  {...a11yProps(index + 1)}
                  key={index}
                  onClick={() => dispatch(search(category))}
                />
              );
            })}
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          ALL MENU
        </TabPanel>
        {categoryArr.map((category, index) => {
          return (
            <TabPanel value={value} index={index + 1}>
              {category}
            </TabPanel>
          );
        })}
      </div>
    </>
  );
};

export default Search;
