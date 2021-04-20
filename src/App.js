import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import About from './components/About/About.js';
import Basket from './components/Basket/Basket.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import MainPageContent from './components/MainPageContent/MainPageContent.js';
import Profile from './components/Profile/Profile.js';

const Delivery = React.lazy(() => import('./components/Delivery/Delivery.js'));  // don't neet this in start bandle,



const App = () => {
  return (
    <div className="App">
      <Header />
      <div className = 'wrapper-content'>  

       <Switch>
          <Route path = {"/"} exact component = {MainPageContent} />
          <Route path = {"/delivery"} component = {
            () => {
              return <Suspense fallback={<div>Loading...</div>}>
                       <Delivery />                                       
                    </Suspense>
            }} />
          <Route path = {"/profile"} component = {Profile} />
          <Route path = {"/basket"} component = {Basket} />
          <Route path = {"/about"} component = {About} />
        </Switch>

      </div>
      <Footer />
    </div>
  );
}

export default App;
