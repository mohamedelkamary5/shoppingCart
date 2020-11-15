import React, {Component} from 'react'
import CartItem from '../Components/CartItem'
import {connect} from 'react-redux'
import {clearCard} from './../Store/actions/action'
class Cart extends Component {

    placeOrder = () => {
        // send the request to the server
        // clear cart 
        this.props.clearCard()
    }
   
    render() {
        return (
            <div>
                <h1>Cart</h1>
                <div className="row">
                    {this.props.cartItem.map((item, index) => 
                        <div key={index} className={'col-sm-6 col-lg-3'}>
                            <CartItem item={item} index={index} />
                        </div> 
                    )}
                </div>
                <br />
                <h3>
                    Totla: {this.props.total}$
                </h3>
                <button onClick={this.placeOrder} className='btn btn-primary btn-block'>Place Order</button>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        cartItem: state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0)
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCard : ()=> dispatch(clearCard())
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(Cart)


