import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/main';

import siteProducts from './mock_data/products.json';

export default class App extends Component{
    render() {
		return (
            <div className="App">
                <Header />
                <Main siteproducts={siteProducts}/>
                <Footer />
            </div>
		);
	}
}
