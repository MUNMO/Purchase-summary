import React, { Component } from 'react';
import logo from '../../src/img/loader.gif';
import Toggle from './Toggle';

const itemDetailsLabels = {
    default: "See item details",
    action: "Hide item details"
};

const promoCodeLabels = {
    default: "Apply promo code",
    action: "Hide promo code"
};

class PurchaseSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTooltip: false
        };
        this.toggleTooltip = this.toggleTooltip.bind(this);
    }

    toggleTooltip() {
        const { showTooltip } = this.state;
        this.setState({
            showTooltip: !showTooltip
        });
    }

    render() {
        const { pricing, itemDetails } = this.props.data;
        const  { showTooltip } = this.state;
        console.log(pricing);
        return (
            <div className="container border b-shadow">
                <h1>Purchase Summary</h1>
                {
                    pricing && itemDetails ? 
                    <div>
                        <div className="ps-details">
                            <span>Subtotal (1 item)</span>
                            <span className="txt-right font-weight-bold">${pricing.subtotal}</span>
                        </div>
                        <div className="ps-details">
                            <span onClick={this.toggleTooltip} className="cursor-pointer">Pickup savings</span>
                            <span className="txt-right txt-color-red font-weight-bold">$-{pricing.savings}</span>
                            {
                                showTooltip ? <div className="ps-tooltip"><span className="w-100">Picking up your order in the store helps cut costs, and we pass the savings on to you</span></div>
                                : ''
                            }
                        </div>
                        <div className="ps-details">
                            <span>Est. taxes & fees <br /> (Based on {pricing.zip})</span>
                            <span className="txt-right font-weight-bold">${pricing.tax}</span>
                        </div>
                        <div className="hr-line" />
                        <div className="ps-details font-weight-bold">
                            <span className="f-size-18">Est. total</span>
                            <span className="f-size-18 txt-right">${pricing.total}</span>
                        </div>
                        <Toggle itemDetails={itemDetails} labels={itemDetailsLabels} className="mt-4" />
                        <div className="hr-line clear-fix" />
                        <Toggle itemDetails={itemDetails} labels={promoCodeLabels} className="mb-4" />
                    </div>
                    : <img src={logo} className="ps-logo" alt="logo" /> 
                }
            </div>
        );
    }
}

export default PurchaseSummary;
