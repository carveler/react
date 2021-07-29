import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import About from './About';
import Nav from './Nav';
import Shop from './Shop';
import ProductDetail from './ProductDetail';
import ShopDetail from './ShopDetail';

import NotFound404 from './NotFound404';

const Routes = () => (
  <Router>
    <div className='App'>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        {/* <Route path='/product' exact  render={ (props)=>(<Products {...props} books={books} loading={loading}/>) }   */}

        <Route>
          <Product books={books} loading={loading} />
        </Route>
        <Route path='/productDetail' component={ProductDetail} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/shop/:id' component={ShopDetail} />
        <Route component={NotFound404} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
