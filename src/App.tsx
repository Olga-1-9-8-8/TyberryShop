import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import { Header } from './components/Header/Header';
import { MainPageContent } from './components/MainPageContent/MainPageContent';

const Delivery = React.lazy(() => import('./components/Delivery/Delivery')); // don't neet this in start bandle,
const About = React.lazy(() => import('./components/About/About'));
const Basket = React.lazy(() => import('./components/Basket/Basket'));
const Profile = React.lazy(
  () => import('./components/Profile/Registration/Profile'),
);
const Footer = React.lazy(() => import('./components/Footer/Footer'));

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="wrapper-content">
        <Switch>
          <Route path="/" exact component={MainPageContent} />
          <Route
            path="/delivery"
            component={() => {
              return (
                <Suspense fallback={<div>Loading...</div>}>
                  <Delivery />
                </Suspense>
              );
            }}
          />
          <Route
            path="/profile"
            component={() => {
              return (
                <Suspense fallback={<div>Loading...</div>}>
                  <Profile />
                </Suspense>
              );
            }}
          />
          <Route
            path="/basket"
            component={() => {
              return (
                <Suspense fallback={<div>Loading...</div>}>
                  <Basket />
                </Suspense>
              );
            }}
          />
          <Route
            path="/about"
            component={() => {
              return (
                <Suspense fallback={<div>Loading...</div>}>
                  <About />
                </Suspense>
              );
            }}
          />
        </Switch>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};
