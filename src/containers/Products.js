import React, { Component } from 'react';

class Products extends Component {
    render() {
        console.log("filteritems", this.props.productsItems)
        return (
            <div className="column products">
                <div className='productImage'>
                    <img src={this.props.productsItems.productImage} className="Image" alt="Product image" />
                </div>
                <button className={this.props.productsItems.isSale ? 'isSale' : "isSale is-hidden"} >Sale</button>
                <button className={this.props.productsItems.isExclusive ? 'isExclusive' : 'isExclusive is-hidden' }>Exclusive</button>
                <div className={this.props.productsItems.isExclusive ? 'product-detail' : 'product-detail is-margin-top' && this.props.productsItems.isSale ? 'product-detail' : 'product-detail is-margin-top'}>
                    <span className="product-name">{this.props.productsItems.productName}</span>
                    <span className="product-price">{this.props.productsItems.price}</span>
                </div>
            </div>
        );
    }
}

export default Products;
