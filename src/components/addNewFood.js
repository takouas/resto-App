
import { connect } from 'react-redux';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { postFoodFromListOfHome, getUserFromApi } from '../action/action';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import React, { Component } from 'react'

class ModalNewFood extends Component {
    state = {
        price: '',
        image: '',
        title: '',
        numbers: 0
    }

    componentDidMount() {
        this.props.getUserFromApi()
    }


    render() {

        return (
            <Modal trigger={<button className="btn-sign"><h2>+</h2></button>} closeIcon>

                <Modal.Content >
                    <center>
                        <div className='box-sigg-in'>
                            <div>
                                <h3>add food</h3>
                                <div className="form-group">
                                    <input id='price' placeholder='price' onChange={(e) => this.setState({ price: e.target.value })}
                                    />
                                </div>
                                <br />

                                <div className="form-group">

                                    <input id='image' placeholder='image' onChange={(e) => { this.setState({ image: e.target.value }) }}
                                    />
                                </div>
                                <br />
                                <div className="form-group">

                                    <input id='title' placeholder='title' onChange={(e) => { this.setState({ title: e.target.value }) }}
                                    />
                                </div>
                                <br />
                                <div className="form-group">

                                </div>
                                <br />
                                <button type="submit" className="btn-sign-compte" onClick={
                                    () =>
                                        this.props.postFoodFromListOfHome({
                                            "price": this.state.price,
                                            "image": this.state.image,
                                            "title": this.state.title,
                                            "numbers": this.state.numbers,
                                        })
                                }>add</button>
                            </div>

                        </div >
                    </center>
                </Modal.Content>

            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    usersReducer: state.usersReducer
});

const mapDispatchToProps = (dispatch) => ({

    getUserFromApi: () => dispatch(getUserFromApi()),
    postFoodFromListOfHome: (el) => dispatch(postFoodFromListOfHome(el))
});





export default connect(mapStateToProps, mapDispatchToProps)(ModalNewFood)

