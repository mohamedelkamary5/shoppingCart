import React from 'react'
import './ProductItem.css'
import {connect} from 'react-redux'
import {removeFromCart} from './../Store/actions/action'
function CartItem(props) {
    const {item, index} = props 
    const {product} = item 
    return (
        <div className="card">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">                
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                    Price {product.price}$
                    <br />
                    Quantity: {item.quantity}
                    <br />
                    Total: {product.price * item.quantity}$
                </p>
                <button className="btn btn-danger text-white" onClick={() => props.removeFromCart(index)}>
                    <i className='fa fa-trash mr-1'></i>
                    Delete
                </button>
            </div>
        </div>
    )
}


// const mapDispatchToProps = (dispatch) => {
//     return{
//         removeFromCart: (index) => dispatch(removeFromCart(index))
        
//     }
// }

export default connect(null, {removeFromCart})(CartItem)