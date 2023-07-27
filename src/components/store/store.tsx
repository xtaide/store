import React, {ReactNode} from 'react'
import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "./counter";
import {Provider, useSelector, useDispatch} from "react-redux";


const {increment, decrement} = counterSlice.actions
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

export const useStore = () => {
    const count = useSelector((state:any) => state.counter.count)
    const dispatch = useDispatch()
    return {
        count,
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    }
}


interface IStoreProvider {
    children: ReactNode
}

export const StoreProvider: React.FC<IStoreProvider> = ({children}) => {
    return <Provider store={store}>{children}</Provider>
}