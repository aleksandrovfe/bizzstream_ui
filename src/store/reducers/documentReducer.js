import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {calculateErrors} from "../../utils/calculateErrors";

export const fetchDoc = createAsyncThunk(
    'document/fetchDoc',
    async () => {
        const response = await fetch('http://localhost:3001/doc')
        return await response.json()
    }
)

export const saveData = createAsyncThunk(
    'document/saveData',
    async (data) => {
        const response = await fetch('http://localhost:3001/data', {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        return response.json()
    }
)

export const documentSlice = createSlice({
    name: 'document',
    initialState: {
        doc: [],
        values: {},
        initialValues: {},
        disableForm: false,
        validationErrors: {},
        status: ''
    },
    reducers: {
        setValue: (state, action) => {
            state.validationErrors = calculateErrors(state.doc, action.payload)
            state.disableForm = !!Object.keys(state.validationErrors).length

            state.values = {
                ...state.values,
                ...action.payload
            }
        },
        handleStatus: (state, action) => {
            state.status = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDoc.fulfilled, (state, action) => {
            state.doc = [...action.payload]
            action.payload.flat().forEach(payload => {
                if (payload.type === 'Text') state.values = {...state.values, [payload.name]: ''}
                if (payload.type === 'number') state.values = {...state.values, [payload.name]: 0}
            })
        })
        builder.addCase(saveData.fulfilled, (state, action) => {
            state.status = action.payload.status
        })
    },
})

export const {setValue, handleStatus} = documentSlice.actions

export default documentSlice.reducer