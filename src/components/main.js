import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/ProductAction';
import Products from '../containers/Products';


class Main extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            filterSizes: '',
        }
        this.filterProducts = [];
        this.updateProducts = this.updateProducts.bind(this);

    }
    componentWillMount(){
        this.props.dispatch(fetchProducts());
    }

    updateProducts(e){
        this.setState({
            filterSizes: e.target.value
        });  
    }


    render(){
        const productslist = this.props.products.items;
        const selectedFilter = this.state.filterSizes;
        if (selectedFilter){
            this.filterProducts = [...productslist].filter(
                (product) => Array.isArray(product.size) && product.size.indexOf(selectedFilter) !== -1)
        
        }else{
                this.filterProducts = [...productslist]
        }
    
        return(
            <div className="filterSearch">
              <div className="row filterNav">
                  <h2>{'Women\'s tops'}</h2>
                  <form>
                      <select  className='filterSizes' onChange={this.updateProducts}>
                          <option value="">Filter by size</option>
                          <option value="XS">XS</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                      </select>
                  </form>
              </div>
              <div className="row filterResult">
                    {
                        this.filterProducts.map((item) => {
                            return <Products productsItems={item} key={item.index}/>}
                        )
                    }
              </div>
          </div>
        )
    }

}

const mapStateToProps = state => {
     return {
         products: state.products,
         loading: state.products.loading,
         error: state.products.error
     };
 }
 export default connect(mapStateToProps)(Main);