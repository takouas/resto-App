
import { connect } from 'react-redux';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { Sign, getUserFromApi } from '../action/action';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import React, { Component } from 'react'
import ListFood from './listFood'
var link = "";
class ModalExampleCloseIcon extends Component {
    state = {
        email: '',
        password: ''
    }

    componentDidMount() {
        this.props.getUserFromApi()
    }

    comparaison = () => {

        let users = this.props.usersReducer

        const x = users.filter(el => el.email === this.state.email && el.password == this.state.password)
        console.log(x[0])
        x.length === 0 ? alert('nexiste pas') : (x[0].email === 'takouasimplon@gmail.com' ? window.location.pathname = '/Admin' : window.location.pathname = '/ListFood')


    }

    render() {

        return (
            <Modal trigger={<button className="btn-sign"><i className="fa fa-user navIcon" ></i></button>} closeIcon>

                <Modal.Content >
                    <center>
                        <div className='box-sigg-in'>
                            <div>
                                <h3>Sign Up</h3>
                                <div className="form-group">
                                    <input id='name' type="text" placeholder=" name" className="form-control" onChange={(e) => this.setState({ name: e.target.value })}
                                    />
                                </div>
                                <br />

                                <div className="form-group">

                                    <input id='email' type="email" pattern=".+@(gmail\.com|yahoo\.fr)" placeholder="Enter email" className="form-control" onChange={(e) => { this.setState({ email: e.target.value }) }}
                                    />
                                </div>
                                <br />
                                <div className="form-group">

                                    <input id='password' type="password" placeholder="Enter password" onChange={(e) => { this.setState({ password: e.target.value }) }}
                                    />
                                </div>
                                <br />
                                <div className="form-group">

                                    <input id='confirmationPassword' type="password" placeholder="Confirmer password" maxLength="6" className="form-control"
                                    />
                                </div>
                                <br />
                                <button type="submit" className="btn-sign-compte" onClick={
                                    () => this.props.sign({
                                        "name": this.state.name,
                                        "email": this.state.email,
                                        "password": this.state.password,
                                    })
                                }>Sign Up</button>
                            </div>

                            <div>
                                <h3>Sign In</h3>
                                <div className="fo">
                                    <input id='emailSave' type="email" pattern=".+@(gmail\.com|yahoo\.fr)" className="form-control" placeholder="Enter email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                                </div>
                                <br />
                                <div>
                                    <input id='passwordSave' type="password" placeholder="Enter password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                </div>
                                <br />
                                <Link to={link}><button onClick={this.comparaison}>Sign in</button> </Link>

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
    sign: (e) => dispatch(Sign(e)),
    getUserFromApi: () => dispatch(getUserFromApi())
});





export default connect(mapStateToProps, mapDispatchToProps)(ModalExampleCloseIcon)

