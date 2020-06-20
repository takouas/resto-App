
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListFromApi, deleteFoodFromListOfHome, editFoodInListOfHome } from '../action/action';
import ModalNewFood from './addNewFood'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class Admin extends Component {
    componentDidMount() {
        this.props.getMenu();

    }

    render() {


        return (
            <div>
                <div className='container-navbar'>
                    <div className='container-navbar-logo'>
                        <img className="logo" src="https://images.vexels.com/media/users/3/136309/isolated/preview/c6539229ad5c57c313d95711a1e676db-logo-burger-fast-food-by-vexels.png" />
                        <h2>yammy food</h2>
                    </div>
                    <div >     <Link to='/'> <h6 className='logOut'>log out</h6></Link></div>
                </div>
                <ModalNewFood />


                <div className='containere-card-food'>
                    {this.props.listFood.map((el, i) => (<center key={i} className='card-food'>
                        <span>
                            <p>{el.title}</p>
                            <img className='size-image-food' src={el.image} />
                            <p className='box-price'>prix:{el.price}<span>DT</span></p>
                            <button className='btn-trash' onClick={() => this.props.deleteFoodFromListOfHome(el)}><i className="fa fa-trash trash"></i></button>
                            <Modal trigger={<button className="btn-sign"><i className="fa fa-edit"></i></button>} closeIcon>

                                <Modal.Content >
                                    <center>

                                        <div>
                                            <div>
                                                <input placeholder='title' onChange={(e) => { this.setState({ title: e.target.value }) }} />
                                                <br />

                                                <input placeholder='image' onChange={(e) => { this.setState({ image: e.target.value }) }} />
                                                <br />
                                                <input placeholder='price' onChange={(e) => { this.setState({ price: e.target.value }) }} />
                                            </div>


                                        </div >
                                        <button className='btn-trash' onClick={() => this.props.editFoodInListOfHome(el, this.state.image, this.state.title, this.state.price)}>save</button>


                                    </center>

                                </Modal.Content>

                            </Modal>
                        </span>
                    </center>
                    ))}
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    listFood: state.menuReducerkey,

});

const mapDispatchToProps = (dispatch) => ({
    getMenu: () => dispatch(getListFromApi()),

    deleteFoodFromListOfHome: (el) => dispatch(deleteFoodFromListOfHome(el)),
    editFoodInListOfHome: (el, image, title, price) => dispatch(editFoodInListOfHome(el, image, title, price))

});




export default connect(mapStateToProps, mapDispatchToProps)(Admin)