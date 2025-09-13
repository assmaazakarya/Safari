import { createSlice } from "@reduxjs/toolkit";

// ✅ استرجاع السلة والمستخدم من localStorage

let userInfo = null;

try {
  const userData = localStorage.getItem("userInfo");
  userInfo = userData ? JSON.parse(userData) : null;
} catch (error) {
  console.warn("userInfo JSON parsing error:", error);
  userInfo = null;
}

const initialState = {
  userInfo,
};

// ✅ تصدير الـ actions والـ ...... -- reducers -- .......
// let appSlice;

let appSlice = createSlice({
  name: "Ecommerce",
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

// ✅ تصدير الـ actions والـ ...... -- reducers -- .......
export const { setUser, logoutUser } = appSlice.actions;

export default appSlice.reducer;
