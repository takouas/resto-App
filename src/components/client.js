import React, { Component } from 'react'

import ListFood from './listFood';
import PageCommande from './pageCommande';
import { BrowserRouter, Route, Link } from 'react-router-dom';
export default class Client extends Component {

    render() {



        return (
            <div>
                <div className='container-navbar'>
                    <span className='container-navbar-logo'>
                        <img className="logo" src="https://images.vexels.com/media/users/3/136309/isolated/preview/c6539229ad5c57c313d95711a1e676db-logo-burger-fast-food-by-vexels.png" />
                        <h2>yammy food</h2>
                    </span>
                    <span >
                        <Link  to='/ListFood'><i className="fa fa-home navIcon"></i></Link>
                        <Link to='/pageCommande'> <i className="fa fa-shopping-basket navIcon"></i> </Link>

                    </span>
                </div>

                <Route exact  path="/ListFood" component={ListFood} />
                <Route exact path="/pageCommande" component={PageCommande} />
            </div>
        )
    }
}
