import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <span className='container-navbar-logo'>
                    <img className="logo" src="https://images.vexels.com/media/users/3/136309/isolated/preview/c6539229ad5c57c313d95711a1e676db-logo-burger-fast-food-by-vexels.png" />
                    <h2>yammy food</h2>
                </span>
                <span className='box-social-media'>
                    <i className="fa fa-facebook" ></i>
                    <i className="fa fa-instagram"></i>
                </span>
            </div>
        )
    }
}
