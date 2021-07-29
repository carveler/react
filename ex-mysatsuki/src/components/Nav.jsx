import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import {
  makeStyles,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
import { GrLanguage } from 'react-icons/gr';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },
  icon: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  back: {
    backgroundColor: '#b5bce6',
  },
}));

export const Nav = () => {
  const classes = useStyles();
  const languageRef = useRef();

  return (
    <>
      <div className={classes.root}>
        <AppBar position='static' className={classes.back}>
          <Toolbar>
            <NavLink to='/'>
              <img src={logo} alt='satsuki_logo'></img>
            </NavLink>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <NavLink to='/about'>
              <Button color='inherit'>About</Button>
            </NavLink>
            <NavLink to='/contact'>
              <Button color='inherit'>Contact</Button>
            </NavLink>
            <NavLink to='/menu'>
              <Button color='inherit'>Menu</Button>
            </NavLink>
            <NavLink to='/takeawaymenu'>
              <Button color='inherit'>Take Away </Button>
            </NavLink>
            <NavLink to='/basket'>
              <Button color='inherit'>Basket</Button>
            </NavLink>
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel id='language'>
                <GrLanguage /> Language
              </InputLabel>
              <Select
                labelId='language'
                id='language'
                ref={languageRef}
                label='language'
              >
                <MenuItem value='fr'>Français</MenuItem>
                <MenuItem value='en'>English</MenuItem>
                <MenuItem value='jp'>日本語</MenuItem>
              </Select>
            </FormControl>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

{
  /* <nav>
  <NavLink to='/'>
    <img src={logo} alt='satsuki_logo'></img>
  </NavLink>
  <NavLink to='/about'> About </NavLink>
  <NavLink to='/contact'> Contact </NavLink>
  <NavLink to='/menu'> Menu </NavLink>
  <NavLink to='/takeawaymenu'> Take Away Menu </NavLink>
  <NavLink to='/basket'> Basket </NavLink>
  <FormControl variant='outlined' className={classes.formControl}>
    <InputLabel id='language'>
      <GrLanguage />
      Language
    </InputLabel>
    <Select labelId='language' id='language' ref={languageRef} label='language'>
      <MenuItem value='fr'>Français</MenuItem>
      <MenuItem value='en'>English</MenuItem>
      <MenuItem value='jp'>日本語</MenuItem>
    </Select>
  </FormControl>
  <NavLink to='/sibnin'> Sign In </NavLink>
      <NavLink to='/signup'> Sign up </NavLink>
</nav>; */
}
