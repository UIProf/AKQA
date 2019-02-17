import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
            <div className="column products">
                <div className='productImage'>
                    <img src={this.props.productslist.productImage} className="Image" alt="Product image" />
                </div>
                <button className={this.props.productslist.isSale ? 'isSale' : "isSale is-hidden"} >Sale</button>
                <button className={this.props.productslist.isExclusive ? 'isExclusive' : 'isExclusive is-hidden' }>Exclusive</button>
                <div className={this.props.productslist.isExclusive ? 'product-detail' : 'product-detail is-margin-top' && this.props.productslist.isSale ? 'product-detail' : 'product-detail is-margin-top'}>
                    <span className="product-name">{this.props.productslist.productName}</span>
                    <span className="product-price">{this.props.productslist.price}</span>
                </div>
            </div>
        );
    }
}

export default Products;
