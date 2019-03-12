import * as types from '../actions/actionTypes';

const ProductDetailSummaryReducer = (state = {}, action) => {
    let newState = { ...state };
    switch (action.type) {
        case types.FETCH_SUCCESS:
            newState = action.data;
            break;
        default:
            return state;
    }
    return newState;

};

export default ProductDetailSummaryReducer;