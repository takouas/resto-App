import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getListFromApiList } from '../action/action';
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

                    {this.props.getFoodFromApiListReducer.map((el, i) => (<div key={i} className='card-food'>
                        <span>
                            <p>{el.title}</p>
                            <img className='size-image-food' src={el.image} />
                            <p> {el.price * el.numbers}<span>DT</span> </p>
                            <p>{el.numbers}</p>
                        </span>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    getFoodFromApiListReducer: state.getFoodFromApiListReducer,
    basketNumbers: state.basketNumbers
});

const mapDispatchToProps = (dispatch) => ({
    getListFromApiList: () => dispatch(getListFromApiList())

});




export default connect(mapStateToProps, mapDispatchToProps)(PageCommande)