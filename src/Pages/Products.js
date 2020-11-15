import React, {Component} from 'react'
import ProductItem from '../Components/ProductItem'
import {getAll} from '../api/products'
class Products extends Component {

    state = {
        products: []
    }
    componentDidMount() {
        getAll()
            .then(data => {
                console.log(data);
                this.setState({
                    products: data
                })
            })
    }
    render() {
        return (
            <div>
                <h1>Products</h1>
                <div className="row">
                    {this.state.products.map(product => 
                        <div key={product.id} className={'col-lg-4 col-sm-6'}>
                        <ProductItem product={product} />
                    </div> 
                    )}
                </div>
            </div>
        )
    }

}

export default Products


