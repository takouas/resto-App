
import { connect } from 'react-redux';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { Sign, getUserFromApi } from '../action/action';
import React, { Component } from 'react'
class ModalExampleCloseIcon extends Component {
    state = {
        emailTest: '',
        passwordTest: ''
    }
    componentDidMount() {
        this.props.getUserFromApi()
    }
    comparaison = () => {
        // if (this.state.emailTest === this.props.usersReducer.email && this.state.passwordTest === this.props.usersReducer.password)
        //     return alert('hello')
        // else {
        //     return alert('dowyw')
        // }

    }
    render() {
        console.log(this.state.emailTest)
        console.log(this.props.usersReducer.email)
        return (
            <Modal trigger={<button className="btn-sign"><i className="fa fa-user navIcon" ></i></button>} closeIcon>

                <Modal.Content >
                    <center>
                        <div className='box-sigg-in'>
                            <form>
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

                                    <input id='password' type="password" placeholder="Enter password" maxLength="6" className="form-control" onChange={(e) => { this.setState({ password: e.target.value }) }}
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



                            </form>

                            <form>
                                <h3>Sign In</h3>

                                <div className="form-group">

                                    <input id='emailSave' type="email" pattern=".+@(gmail\.com|yahoo\.fr)" className="form-control" placeholder="Enter email" onChange={(e) => { this.setState({ emailTest: e.target.value }) }} />
                                </div>
                                <br />
                                <div className="form-group">

                                    <input id='passwordSave' type="password" maxLength="6" className="form-control" placeholder="Enter password" onChange={(e) => { this.setState({ passwordTest: e.target.value }) }} />
                                </div>
                                <br />
                                <button type="submit" className="btn-sign-compte"
                                    onClick={() => this.comparaison} > Sign In </button>



                            </form>
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

