import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Menu } from '../components/Menu';
import { Contact } from '../components/Contact';
import { TakeAwayMenu } from '../components/TakeAwayMenu';
import { TakeAwayMenuDetail } from '../components/TakeAwayMenuDetail';
import { Basket } from '../components/Basket';
import { SignUpForm } from '../components/signin/SignUpForm';
import { SignInForm } from '../components/signin/SignInForm';
import Checkout from '../components/Checkout';
import '../css/Routes.css';
import { Header } from '../components/Header';

export const Routes = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/menu' component={Menu} />
        <Route path='/contact' component={Contact} />
        <Route path='/takeawaymenu' exact component={TakeAwayMenu} />
        <Route path='/takeawaymenudetail' component={TakeAwayMenuDetail} />
        <Route path='/basket' exact component={Basket} />
        <Route path='/signup' component={SignUpForm} />
        <Route path='/signin' component={SignInForm} />
        <Route path='/checkout' component={Checkout} />
      </Switch>
    </Router>
  );
};
