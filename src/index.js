import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/ScrollToTop.js';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>     {/*for environments (includes GitHubPages)*/}
        <ScrollToTop />
            <App />
      </BrowserRouter>
   </Provider>
  </React.StrictMode>, document.getElementById('root')
 
);

