import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import './App.css';
import ModalExampleCloseIcon from './components/Sign';
import ListFood from './components/listFood';

import PageCommande from './components/pageCommande';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Footer from './components/footer';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='container-navbar'>
          <span className='container-navbar-logo'>
            <img className="logo" src="https://images.vexels.com/media/users/3/136309/isolated/preview/c6539229ad5c57c313d95711a1e676db-logo-burger-fast-food-by-vexels.png" />
            <h2>yammy food</h2>
          </span>
          <span >
            <Link to='/'><i className="fa fa-home navIcon"></i></Link>
            <Link to='/pageCommande'> <i className="fa fa-shopping-basket navIcon"></i>
            </Link>
            <ModalExampleCloseIcon />
          </span>
        </div>

        <Route exact path="/" component={ListFood} />
        <Route path="/pageCommande" component={PageCommande} />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
