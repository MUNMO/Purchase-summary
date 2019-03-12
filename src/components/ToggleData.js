import React, { Component } from 'react';
import chair from '../../src/img/chair.jpeg';

class ToggleData extends Component {
    render() {
        const { label, itemDetails } = this.props;
        return (
            <div style={{position: 'relative'}}>
            {
                label === "Hide item details" ? <div className="mt-3">
                    <img src={chair} alt="Chair" className="prod-img" />
                    <span className="prod-desc">{itemDetails.item_name}</span>
                    <span className="prod-qty text-grey">Qty: {itemDetails.quantity}</span>
                </div> : ''
            }
            {
                label === "Hide promo code" ? <div className="mt-3">
                    <p className="text-grey">Promo code</p>
                    <input type="text" className="ps-input mr-4" />
                    <input type="button" className="ps-btn" value="Apply" />
                </div> : ''
            }
            </div>
        );
    }
}

export default ToggleData;
