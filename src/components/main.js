import React, { Component } from 'react';
import Products from '../containers/Products';



class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            filterSizes: ''
        }

        this.updateProducts = this.updateProducts.bind(this);

    }
   
    updateProducts(e){
        this.setState({filterSizes: e.target.value});
    }
    render(){
        const products = [...this.props.siteproducts];
        const selectedFilter = this.state.filterSizes;
        if (selectedFilter){
            this.filteredProducts = products.filter(
                (product) => Array.isArray(product.size) && product.size.indexOf(selectedFilter) !== -1

            );
        }else{
            this.filteredProducts =[...this.props.siteproducts];
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
                      this.filteredProducts.map((productslist) => {
                          return <Products productslist={productslist} key={productslist.index}/>
                      })
                   }
              </div>
          </div>
        )
    }

}

export default Main;