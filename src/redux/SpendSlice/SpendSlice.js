import { createSlice } from "@reduxjs/toolkit";

const SpendSlice = createSlice({
  name:'spend',
  initialState:{
    money:198000000000,
    shoppingList:[]
  },
  reducers:{
    sellItem:(state,action)=>{
      state.money = state.money + action.payload
    },
    buyItem:(state,action) => {
      state.money = state.money - action.payload
    },
    addShoppingList:(state, action) => {
      const result = action.payload;
      result.itemCount = 1;
      console.log(result)
      state.shoppingList.push(result);
    },
    updateAddShoppingList:(state, action) => {
      const index = state.shoppingList.findIndex((item) => item.id === action.payload.id);
      state.shoppingList[index] = action.payload;
      state.shoppingList[index].itemCount += 1;
    },
    updateRemoveShoppingList:(state, action) => {
      const index = state.shoppingList.findIndex((item) => item.id === action.payload.id);
      state.shoppingList[index] = action.payload;
      state.shoppingList[index].itemCount -= 1;
    },
    removeShoppinList:(state, action) => {
      const result = state.shoppingList.filter((item) => item.id !== action.payload);
      state.shoppingList = result;
    }

  }
});

export const {sellItem, buyItem, addShoppingList, updateAddShoppingList, updateRemoveShoppingList, removeShoppinList} = SpendSlice.actions;
export default SpendSlice.reducer;