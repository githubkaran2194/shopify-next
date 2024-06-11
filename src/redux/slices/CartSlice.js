import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
        },
        removeToCart: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
        }
    }
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;