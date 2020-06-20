import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import './App.css';
import Visiteur from './components/visiteur'
import Footer from './components/footer';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ListFood from './components/listFood'
import Client from './components/client';
import Admin from './components/admin';
import ModalExampleCloseIcon from './components/Sign'
import Commande from './components/commande';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='container-navbar'>
          <span className='container-navbar-logo'>
            {/* 
            <Link to='/'><i className="fa fa-home navIcon"></i></Link>
            <ModalExampleCloseIcon /> */}
          </span>
        </div>



        <Route exact path="/" component={Visiteur} />
        <Route exact path="/ListFood" component={ListFood} />

        <Route exact path="/Admin" component={Admin} />

        <div>


        </div>

      </BrowserRouter>
    </Provider>
  );
}

export default App;
