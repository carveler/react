import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import '../css/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={ProductList} />
        {/* <Route path='/signIn' exact component={SignIn} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
