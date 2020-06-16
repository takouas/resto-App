import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getListFromApiList, incrementFoodToApi, decrementFoodToApi, addBasket, deleteFood } from '../action/action';
class PageCommande extends Component {

    state = {
        s: ""
    }

    componentDidMount() {
        this.props.getListFromApiList()
    }



    price = () => {

        const totalPrix = this.props.getFoodFromApiListReducer.map(el => el.price * el.numbers)
        let somme = 0
        for (let i = 0; i < totalPrix.length; i++) {
            somme += totalPrix[i];

            this.setState({ s: somme + 'DT' })
        }
        return somme

    }

    render() {
        console.log('hyh')


        return (
            <div>

                <div className='containere-card-food'>

                    {this.props.getFoodFromApiListReducer.map((el, i) => (<center key={i} className='card-food'>
                        <span>
                            <p>{el.title}</p>
                            <img className='size-image-food' src={el.image} />
                            <p>prix : {el.price * el.numbers}<>DT</> </p>
                            <>   <button className='btn-decin' onClick={() => this.props.incrementFoodToApi(el, el.id)}>+</button>
                                <span>{el.numbers}</span>
                                <button className='btn-decin' onClick={() => this.props.decrementFoodToApi(el, el.id)}>-</button></> <br />

                            <button className='btn-trash' onClick={() => this.props.deleteFood(el)}><i className="fa fa-trash trash"></i></button>
                        </span>

                    </center>
                    ))}



                </div>
                <br />
                <center> <button className='btn-sign-compte' onClick={() => this.price()}>Total : </button> {this.state.s} </center>

            </div >
        )
    }
}
const mapStateToProps = (state) => ({
    getFoodFromApiListReducer: state.getFoodFromApiListReducer,

});

const mapDispatchToProps = (dispatch) => ({
    getListFromApiList: () => dispatch(getListFromApiList()),
    incrementFoodToApi: (el, id) => dispatch(incrementFoodToApi(el, id)),
    decrementFoodToApi: (el, id) => dispatch(decrementFoodToApi(el, id)),

    deleteFood: (el) => dispatch(deleteFood(el))
});




export default connect(mapStateToProps, mapDispatchToProps)(PageCommande)