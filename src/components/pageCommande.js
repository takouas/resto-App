import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getListFromApiList, incrementFoodToApi, decrementFoodToApi, addBasket, deleteFood } from '../action/action';
class PageCommande extends Component {
    componentDidMount() {
        this.props.getListFromApiList()
    }
    render() {

        return (
            <div>
                <p>{this.props.basketNumbers.total}</p>
                <p>{this.props.basketNumbers.basketNumbers}</p>
                <div className='containere-card-food'>

                    {this.props.getFoodFromApiListReducer.map((el, i) => (<center key={i} className='card-food'>
                        <span>
                            <p>{el.title}</p>
                            <img className='size-image-food' src={el.image} />
                            <p> {el.price * el.numbers}<span>DT</span> </p>
                            <sapn>   <button className='btn-decin' onClick={() => this.props.incrementFoodToApi(el, el.id)}>+</button>
                                <span>{el.numbers}</span>
                                <button className='btn-decin' onClick={() => this.props.decrementFoodToApi(el, el.id)}>-</button></sapn> <br />

                            <button className='btn-trash' onClick={() => this.props.deleteFood(el)}><i className="fa fa-trash trash"></i></button>
                        </span>

                    </center>
                    ))}



                </div>
                <button onClick={() => this.props.addBasket()}>Total </button>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    getFoodFromApiListReducer: state.getFoodFromApiListReducer,
    basketNumbers: state.basketNumbers
});

const mapDispatchToProps = (dispatch) => ({
    getListFromApiList: () => dispatch(getListFromApiList()),
    incrementFoodToApi: (el, id) => dispatch(incrementFoodToApi(el, id)),
    decrementFoodToApi: (el, id) => dispatch(decrementFoodToApi(el, id)),
    addBasket: () => (el) => dispatch(addBasket(el)),
    deleteFood: (el) => dispatch(deleteFood(el))
});




export default connect(mapStateToProps, mapDispatchToProps)(PageCommande)