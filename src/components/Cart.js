import React, { createContext, useReducer, useEffect } from 'react';
import { products } from "./Product";
import Cartdata from './Cartdata';
import { reducer } from './reducer';

export const Contextvalue = createContext();

const initialState = {
    item: products,
    totalAmount:0,
    totalItem:0
}


function Cart() {
    const[state, dispatch] = useReducer(reducer, initialState);

    const removeItem = (id) => {
        return dispatch({
            type:'REMOVE_ITEM',
            payload:id
        })
    }

    const clearCart = () => {
        return dispatch({
            type:'CLEAR_CART'
        })
    }

    const DEC = (id) => {
        return dispatch({
            type:'DECREMENT',
            payload: id
        })
    }

    const INC = (id) => {
        return dispatch({
            type:'INCREMENT',
            payload: id
        })
    }

    useEffect(() => {
        dispatch({
            type:'TOTAL',
        })
        console.log('Change');
    }, [state.item]); 

    return (
        <Contextvalue.Provider value = {{ ...state, removeItem, clearCart, INC, DEC }}>
            <Cartdata />
        </Contextvalue.Provider>
    )
}
export default Cart
