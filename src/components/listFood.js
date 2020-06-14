
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListFromApi, addFoodToApi } from '../action/action';


class ListFood extends Component {
    componentDidMount() {
        this.props.getMenu();

    }

    render() {


        return (
            <div>

                <div className='containere-card-food'>
                    {this.props.listFood.map((el, i) => (<div key={i} className='card-food'>
                        <span>
                            <p>{el.title}</p>
                            <img className='size-image-food' src={el.image} />
                            <p>{el.price}<span>DT</span> </p>


                            <button onClick={() => this.props.addFood(el)}> <img className='size-image-add' src='https://cdn2.iconfinder.com/data/icons/shopping-and-e-commerce-paper-flat-vol-1/100/add__cart__shopping__plus__shop__ecommerce__Addtocart-512.png' /></button>
                        </span>
                    </div>
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
    addFood: (el) => dispatch(addFoodToApi(el)),


});




export default connect(mapStateToProps, mapDispatchToProps)(ListFood)