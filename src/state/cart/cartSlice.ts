'use client'
import { getProductById } from '@/lib/getRequiredProducts'
import { createSlice } from '@reduxjs/toolkit'

interface CartState{
    cartItems : Product[],
    cartTotalAmount : number,
    cartTotalQuantity : number,
}

const initialState : CartState = {
    cartItems : [],
    cartTotalAmount : 0,
    cartTotalQuantity : 0 
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart(state,action){
            const index:number = state.cartItems.findIndex((product) => product.productId === action.payload.productId)
            if(index >= 0)
            {
                state.cartItems[index].quantity += 1
            } else 
            {
                const temp = {...action.payload, quantity: 1}  
                state.cartItems.push(temp)
            }

            state.cartTotalAmount += action.payload.price
            state.cartTotalQuantity++
        },
        clearCart(state){
            state.cartItems = [];
            state.cartTotalAmount = 0;
            state.cartTotalQuantity = 0;
        },
        deleteCartItem(state,action){
            const index:number = state.cartItems.findIndex((product) => product.productId === action.payload.productId)
            state.cartTotalAmount = state.cartTotalAmount - (state.cartItems[index].quantity * state.cartItems[index].price)
            state.cartTotalQuantity = state.cartTotalQuantity - state.cartItems[index].quantity
            state.cartItems.splice(index,1)
        },
        increaseCartItemQuantity(state,action){
            const index:number = state.cartItems.findIndex((product) => product.productId === action.payload.productId)
            state.cartItems[index].quantity++;
            state.cartTotalAmount += action.payload.price
            state.cartTotalQuantity++
        },
        decreaseCartItemQuantity(state,action){
            const index:number = state.cartItems.findIndex((product) => product.productId === action.payload.productId)
            if(state.cartItems[index].quantity > 0){
                state.cartItems[index].quantity--;
                state.cartTotalAmount -= action.payload.price
                state.cartTotalQuantity--
            } else {
                state.cartItems[index].quantity = 0;
            }
            
        }
    }
})

export const { addToCart, clearCart, deleteCartItem,increaseCartItemQuantity,decreaseCartItemQuantity } = cartSlice.actions;
export default cartSlice.reducer
