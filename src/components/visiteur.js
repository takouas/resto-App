import React, { Component } from 'react'
import { connect } from 'react-redux';
import ModalExampleCloseIcon from './Sign';
import { getListFromApi, addFoodToApi } from '../action/action';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Footer from './footer';
class Visiteur extends Component {
    componentDidMount() {
        this.props.getMenu();

    }
    render() {
        return (
            <div>
                <div className='container-navbar'>
                    <span className='container-navbar-logo'>
                        <img className="logo" src="https://images.vexels.com/media/users/3/136309/isolated/preview/c6539229ad5c57c313d95711a1e676db-logo-burger-fast-food-by-vexels.png" />
                        <h2>yammy food</h2>
                        <ModalExampleCloseIcon />

                    </span>
                </div>

                <div className='containere-card-food'>
                    {console.log(this.props.listFood)}
                    {this.props.listFood.map((el, i) => (<center key={i} className='card-food'>
                        <span>
                            <p>{el.title}</p>
                            <img className='size-image-food' src={el.image} />
                            <p className='box-price'>prix:{el.price}<span>DT</span>
                            </p>
                        </span>
                    </center>
                    ))}
                </div>
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    listFood: state.menuReducerkey,
});

const mapDispatchToProps = (dispatch) => ({
    getMenu: () => dispatch(getListFromApi()),

});




export default connect(mapStateToProps, mapDispatchToProps)(Visiteur)