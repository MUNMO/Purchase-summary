import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions/PurchaseSummaryActions';
import './App.css';
import PurchaseSummary from './components/PurchaseSummary';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchData());
    }
    
    render() {
        return (
            <div className="container">
                <PurchaseSummary data={this.props.data} showLoader={this.props.showLoader} />
            </div>
        );
    }
}
    
const mapStateToProps = (state) => {
    console.log(state.ProductDetailSummaryReducer);
    return {
        data: state.ProductDetailSummaryReducer,
        showLoader: false
    }
}

export default connect(mapStateToProps)(App);
    