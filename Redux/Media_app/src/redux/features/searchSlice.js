import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name:"search",
    initialState:{
        query:"",
        result:[],
        loading:false,
        error:null
    },
    reducers:{
        setQuery:(state, action) =>{
            state.query = action.payload
        },
        setResult:(state, action) =>{
            state.result = action.payload
            state.loading = false
        },
        setLoading:(state, action) =>{
            state.loading = true
            state.error = null
        },
        setError:(state, action) =>{
            state.error = action.payload
            state.loading = false
        },
        clearResult: (state) => {
            state.result = []
        }
    }
})

export const { setQuery, setResult, setLoading, setError } = searchSlice.actions
export default searchSlice.reducer