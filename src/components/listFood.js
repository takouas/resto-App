
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListFromApi, addFoodToApi } from '../action/action';
import Footer from './footer';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Commande from './commande'
class ListFood extends Component {
    componentDidMount() {
        this.props.getMenu();

    }

    render() {


        return (
            <div>
                <div>
                    <div className='container-navbar'>
                        <span className='container-navbar-logo'>
                            <img className="logo" src="https://images.vexels.com/media/users/3/136309/isolated/preview/c6539229ad5c57c313d95711a1e676db-logo-burger-fast-food-by-vexels.png" />
                            <h2>yammy food</h2>
                        </span>
                        <span >
                            <Commande />
                        </span>
                        <span> <Link to='/'> <h6 className='logOut'>log out</h6></Link></span>
                    </div>
                </div>

                <div className='containere-card-food'>
                    {this.props.listFood.map((el, i) => (<center key={i} className='card-food'>
                        <span>
                            <p>{el.title}</p>  <button className='btn-add-food' onClick={() => this.props.addFood(el)}> <img className='size-image-add' src='https://cdn2.iconfinder.com/data/icons/shopping-and-e-commerce-paper-flat-vol-1/100/add__cart__shopping__plus__shop__ecommerce__Addtocart-512.png' /></button>
                            <img className='size-image-food' src={el.image} />
                            <p className='box-price'>prix:{el.price}<span>DT</span>


                            </p>
                        </span>
                    </center>
                    ))}
                </div>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    listFood: state.menuReducerkey,

});

const mapDispatchToProps = (dispatch) => ({
    getMenu: () => dispatch(getListFromApi()),
    addFood: (el) => dispatch(addFoodToApi(el)),


});




export default connect(mapStateToProps, mapDispatchToProps)(ListFood)