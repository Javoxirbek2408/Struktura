import { TOKEN } from '@/constants';
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: Cookies.get(TOKEN) ? true : false,
    cart: [],
    // wishlist: [],
    followedProducts: [],
  },
  reducers: {
    login: (state, action) => {
      state.auth = true;
      Cookies.set(TOKEN, action.payload.token);
    },
    logout: (state) => {
      state.auth = false;
      Cookies.remove(TOKEN);
    },

    addToCart: (state, action) => {
      const existing = state.cart.find((el) => el.id === action.payload.id);
      if (existing) {
        existing.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    folowProduct: (state, action) => {
      const existing = state.followedProducts.find(
        (el) => el.id === action.payload.id
      );
      if (existing) {
        state.followedProducts = state.followedProducts.filter(
          (el) => el.id !== action.payload.id
        );
      } else {
        state.followedProducts.push(action.payload);
      }
    },
    incrementPlus: (state, action) => {
      const id = action.payload;
      const item = state.cart.find((el) => el.id === id);
      if (item) {
        item.quantity += 1;
      } else {
        const product = action.meta?.product;
        if (product) {
          state.cart.push({ ...product, quantity: 1 });
        }
      }
    },

    decrementMinus: (state, action) => {
      const item = state.cart.find((el) => el.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else if (item && item.quantity === 1) {
        state.cart = state.cart.filter((el) => el.id !== action.payload);
      }
    },

    deleteProduct: (state, action) => {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
      state.followedProducts = state.followedProducts.filter(
        (el) => el.id !== action.payload
      );
    },
  },
});

export const {
  login,
  logout,
  addToCart,
  deleteProduct,
  folowProduct,
  decrementMinus,
  clearCart,
  incrementPlus,
} = authSlice.actions;

export default authSlice.reducer;
