import React from 'react'

import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ModalExampleCloseIcon = () => (
    <Modal trigger={<Button>Sign Up/Sign In</Button>} closeIcon>

        <Modal.Content>
            <div className='box-sigg-in'>
                <form>
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label> name</label>
                        <input id='name' type="text" placeholder=" name" className="form-control" required
                        />
                    </div>


                    <div className="form-group">
                        <label>Email address</label>
                        <input id='email' type="email" className
                            placeholder="Enter email" className="form-control" required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input id='password' type="password" placeholder="Enter password" maxLength="6" className="form-control" required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input id='confirmationPassword' type="password" placeholder="Confirmer password" maxLength="6" className="form-control" required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" >Sign Up</button>


                    <p className="forgot-password text-right">

                    </p>
                </form>

                <form>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input id='emailSave' type="email" pattern=".+@(gmail\.com|yahoo\.fr)" className="form-control" placeholder="Enter email" required />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input id='passwordSave' type="password" maxLength="6" className="form-control" placeholder="Enter password" required />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block"> Submit </button>

                </form>
            </div >

        </Modal.Content>

    </Modal>
)

export default ModalExampleCloseIcon





