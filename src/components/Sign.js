
import { connect } from 'react-redux';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { Sign } from '../action/action';
import React, { Component } from 'react'
class ModalExampleCloseIcon extends Component {

    render() {

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

                                    <input id='email' type="email" className
                                        placeholder="Enter email" className="form-control" onChange={(e) => { this.setState({ email: e.target.value }) }}
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

                                    <input id='emailSave' type="email" pattern=".+@(gmail\.com|yahoo\.fr)" className="form-control" placeholder="Enter email" required />
                                </div>
                                <br />
                                <div className="form-group">

                                    <input id='passwordSave' type="password" maxLength="6" className="form-control" placeholder="Enter password" required />
                                </div>
                                <br />
                                <button type="submit" className="btn-sign-compte"> Sign In </button>

                            </form>
                        </div >
                    </center>
                </Modal.Content>

            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    sign: (e) => dispatch(Sign(e))

});





export default connect(mapStateToProps, mapDispatchToProps)(ModalExampleCloseIcon)





