import { createSlice } from "@reduxjs/toolkit"

const chatSlice  = createSlice({
    name:"chat",
    initialState:{messages:[]},
    reducers:{
        addMessage : (state, action) => {
            state.messages.push(action.payload)
        },
        removeMessage : (state) => {
            state.messages.shift();
        }

    }
}) 

export const {addMessage, removeMessage} = chatSlice.actions;
export default chatSlice.reducer