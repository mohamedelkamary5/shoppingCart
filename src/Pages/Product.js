import React from "react";
import {getById} from "../api/products";
import {connect} from 'react-redux'
import {addtocart} from './../Store/actions/action'

class Product extends React.Component{

    state={
        loading: true,
        quantity: 1,
        product: {}
    };

    componentDidMount(){
        const id = this.props.match.params.id;
        console.log(id);
        getById(parseInt(id))
            .then(product => {
                this.setState({
                    product,
                    loading: false,
                });
            })
    }
    
    addToCart = (product) => {
        this.props.addToCart(product, this.state.quantity)
        console.log('add');
    }
    handleQuantity = (e) => {
        const value = e.target.value;
        if(value < 0)
        return false
        this.setState({
            quantity: value
        })
    }

    render(){
        if(this.state.loading)
            return 'Loading ..';

        const product = this.state.product;
        const quantity = this.state.quantity

        return (
            <div>
                <div className={'row'}>
                    <div className="col-5">
                        <img src={product.image} width={'100%'}/>
                    </div>
                    <div className="col-6">
                    <h1>{product.name}</h1>

                        <p>Price: {product.price}$</p>

                        <p>{product.description}</p>
                        <p>Total: { product.price * quantity }$ </p>

                        <input type="number" value={quantity} onChange={this.handleQuantity} />
                        
                        <br /><br />

                        <button className="btn btn-primary" onClick={() => this.addToCart(product)}>
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div>
        );
    }
}



const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (prodctsInfo, quantity) => dispatch(addtocart(prodctsInfo, quantity))
        
    }
}


export default connect(null, mapDispatchToProps)(Product)