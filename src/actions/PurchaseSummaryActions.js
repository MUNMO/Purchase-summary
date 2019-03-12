import { fetchRequest, fetchSuccess } from './fetch';

const pricingData = {
    "pricing": {
        "subtotal": 102.96,
        "savings": 3.85,
        "tax": 8.92,
        "total": 108.03,
        "zip": 85050
    },
    "itemDetails": {
        "item_name": "Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red",
        "quantity": 1
    }
};

const getPricingData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(pricingData);
        }, 1000);
    });
};

export function fetchData() {
    return dispatch => {
        dispatch(fetchRequest());
        return getPricingData().then(json => {
            dispatch(fetchSuccess(json));
            return json;
        });
    };
}