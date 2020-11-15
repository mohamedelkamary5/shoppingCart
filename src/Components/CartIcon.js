import React from 'react'
import './CartIcon.css'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
function CartIcon(props) {
    return (
        <div id="cart-icon">
            <Link to="/cart">
                <i className='fa fa-shopping-cart fa-2x text-dark'></i>
                <span className='badge badge-danger'>{props.qauntity}</span>
            </Link>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        qauntity: state.cart.reduce((total, item) => total + parseInt(item.quantity), 0)
    }
}

export default connect(mapStateToProps)(CartIcon)
