import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../actions/basketActions';
import edamame from '../assets/food/edamame.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export const TakeAwayMenuCard = ({ item }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  return (
    <>
      <Grid item xs={12} md={6} lg={4}>
        <Paper className={classes.paper}>
          <Link
            to={{
              pathname: `/takeawaymenudetail/${item.name}`,
              state: { item: item },
            }}
          >
            <div>
              <img src={edamame}></img>
            </div>
            <div>{item.name}</div>
            <div>price:${item.price.price}</div>
            details
          </Link>
          <button onClick={() => dispatch(addItem(item))}>add to basket</button>
        </Paper>
      </Grid>
    </>
  );
};

{
  /* <button onClick={() => dispatch(addItem(item))}>+</button>

<button onClick={() => dispatch(decrease(item.id))}>-</button> */
}
