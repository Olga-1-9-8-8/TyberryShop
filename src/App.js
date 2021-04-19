import { Route, Switch } from 'react-router';
import './App.css';
import About from './components/About/About.js';
import Basket from './components/Basket/Basket.js';
import Delivery from './components/Delivery/Delivery.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import MainPageContent from './components/MainPageContent/MainPageContent.js';
import Profile from './components/Profile/Profile.js';






const App = () => {
  return (
    <div className="App">
      <Header />
      <div className = 'wrapper-content'>  

       <Switch>
          <Route path = {"/"} exact component = {MainPageContent} />
          <Route path = {"/delivery"} component = {Delivery} />
          <Route path = {"/profile"} component = {Profile} />
          <Route path = {"/basket"} component = {Basket} />
          <Route path = {"/about"} component = {About} />
        </Switch>

      </div>
      <Footer />
    </div>
  );
}

/* <Switch>
<Route path="/">
  <MainPageContent />
</Route>
<Route path="/about">
  <About />
</Route>
<Route path="/delivery">
  <Delivery />
</Route>
<Route path="/profile">
  <Profile />
</Route>
<Route path="/basket">
  <Basket />
</Route>
</Switch> */

export default App;
