import _ from 'lodash'

import { connect } from 'react-redux';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'


import { getListFromApiList, incrementFoodToApi, decrementFoodToApi, addBasket, deleteFood } from '../action/action';
import React, { Component } from 'react'

class Commande extends Component {
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
        return (
            <div>

                <Modal trigger={<button className="btn-sign"><i className="fa fa-shopping-basket navIcon"></i></button>} closeIcon>

                    <Modal.Header>Profile Picture</Modal.Header>
                    <Modal.Content image scrolling>


                        <Modal.Description>
                            <Header>Modal Header</Header>
                            <div>

                                <div className='containere-card-food'>

                                    {this.props.getFoodFromApiListReducer.map((el, i) => (<center key={i} className='card-food'>
                                        <span>
                                            <p>{el.title}</p>
                                            <img className='size-image-food' src={el.image} />
                                            <p>prix : {el.price}<>DT</> </p>
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


                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>

                    </Modal.Actions>
                </Modal>
            </div>

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




export default connect(mapStateToProps, mapDispatchToProps)(Commande) 