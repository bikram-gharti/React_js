import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './feature/counterReducer'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})
